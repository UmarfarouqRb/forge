import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../App';
import ToggleSwitch from '../components/ToggleSwitch';
import { UserContext } from '../providers/Login';
// Wallet address display component
const WalletAddressDisplay: React.FC<{ isDark: boolean }> = ({ isDark }) => {
	const user = useContext(UserContext) as { wallet?: string } | null;
	if (!user?.wallet) return null;
	const wallet = user.wallet;
	const shortWallet = wallet.length > 10 ? `${wallet.slice(0, 5)}...${wallet.slice(-5)}` : wallet;
	return (
		<div style={{ fontSize: 13, color: isDark ? '#bbb' : '#888', marginLeft: 8, marginTop: 2, wordBreak: 'break-all' }}>
			<span style={{ fontWeight: 500, color: isDark ? '#f5f5f5' : '#23272f' }}>Wallet:</span> {shortWallet}
		</div>
	);
};
import { FaRobot, FaWallet } from 'react-icons/fa';
import './Swap.css';
import './SwapBot.css';

import ethLogo from '/eth.png';
import SuccessModal from '../components/SuccessModal';
import usdcLogo from '/usdc.png';
import monLogo from '/mon.png';

const tokens = [
	{ symbol: 'ETH', name: 'Ethereum', logo: ethLogo },
	{ symbol: 'USDC', name: 'USD Coin', logo: usdcLogo },
	{ symbol: 'MON', name: 'Mon Token', logo: monLogo },
];



const Swap: React.FC = () => {
	const [aiMode, setAiMode] = useState(false);
	// For AI mode
	const [command, setCommand] = useState('');
	const [aiFromToken, setAiFromToken] = useState('ETH');
	const [aiToToken, setAiToToken] = useState('USDC');
	const [aiAmount, setAiAmount] = useState('');
	const [aiResult, setAiResult] = useState<string | null>(null);
	const [aiLoading, setAiLoading] = useState(false);
	useEffect(() => {
		if (!aiMode) return;
		const match = command.match(/swap\s+(\d+(?:\.\d+)?)\s+(\w+)\s+to\s+(\w+)/i);
		if (match) {
			setAiAmount(match[1]);
			setAiFromToken(match[2].toUpperCase());
			setAiToToken(match[3].toUpperCase());
		}
	}, [command, aiMode]);
	const { theme } = useContext(ThemeContext);
	const [fromToken, setFromToken] = useState(tokens[2]); // Default to MON
	const [toToken, setToToken] = useState(tokens[1]);
	const [amount, setAmount] = useState('');
	const [toAmount, setToAmount] = useState('');
	// const [network, setNetwork] = useState<'mainnet' | 'testnet'>('mainnet');
		const [showSuccess, setShowSuccess] = useState(false);
		const [successMsg, setSuccessMsg] = useState('');


		const handleSwap = () => {
			if (!amount) return;
			if (fromToken.symbol === toToken.symbol) {
				alert('Please select different tokens to swap.');
				return;
			}
			setSuccessMsg(`Successfully swapped ${amount} ${fromToken.symbol} for ${(parseFloat(amount) * 0.99).toFixed(4)} ${toToken.symbol} on testnet.`);
			setShowSuccess(true);
			setAmount('');
			setToAmount('');
		};

	const handleSwitch = () => {
		// Also swap tokens and input values
		const prevFrom = fromToken;
		const prevAmount = amount;
		setFromToken(toToken);
		setToToken(prevFrom);
		setAmount(toAmount);
		setToAmount(prevAmount);
	};

				// Theme-based styles
				const isDark = theme === 'dark';
				const containerStyle = {
					background: isDark ? 'var(--bg)' : '#fff',
					minHeight: '100vh',
					color: isDark ? 'var(--text)' : '#23272f',
					transition: 'background 0.2s, color 0.2s',
				};
				const cardStyle = {
					background: isDark ? 'var(--bg-card)' : '#fff',
					color: isDark ? 'var(--text)' : '#23272f',
					boxShadow: isDark ? '0 2px 8px #0003' : '0 2px 8px rgba(0,0,0,0.04)',
					border: isDark ? '1px solid var(--border)' : '1px solid #eee',
				};
				const robotColor = isDark ? 'var(--text)' : '#23272f';


						return (
							<div className="swap-container" style={containerStyle}>
								<SuccessModal show={showSuccess} message={successMsg} onClose={() => setShowSuccess(false)} />
								<h2 className="swap-title">Swap</h2>
								<div style={{ textAlign: 'center', marginBottom: 0, marginTop: 8 }}>
									<div style={{ fontSize: 22, fontWeight: 700, color: robotColor, marginBottom: 8, letterSpacing: 1 }}>Choose swap mode</div>
																	<div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 18 }}>
																		<button
																			style={{
																				padding: '8px 18px',
																				borderRadius: 8,
																				fontWeight: 700,
																				border: aiMode ? '2px solid #2563eb' : '1px solid #bbb',
																				background: aiMode ? 'linear-gradient(90deg,#2563eb 60%,#1e40af 100%)' : '#f5f7fa',
																				color: aiMode ? '#fff' : '#23272f',
																				boxShadow: aiMode ? '0 2px 8px #2563eb22' : 'none',
																				transition: 'all 0.18s',
																				outline: 'none',
																				cursor: 'pointer',
																			}}
																			onClick={() => setAiMode(true)}
																		>
																			<FaRobot style={{ marginRight: 6 }} />Swap Agent
																		</button>
																		<button
																			style={{
																				padding: '8px 18px',
																				borderRadius: 8,
																				fontWeight: 700,
																				border: !aiMode ? '2px solid #2563eb' : '1px solid #bbb',
																				background: !aiMode ? 'linear-gradient(90deg,#2563eb 60%,#1e40af 100%)' : '#f5f7fa',
																				color: !aiMode ? '#fff' : '#23272f',
																				boxShadow: !aiMode ? '0 2px 8px #2563eb22' : 'none',
																				transition: 'all 0.18s',
																				outline: 'none',
																				cursor: 'pointer',
																			}}
																			onClick={() => setAiMode(false)}
																		>
																			Manual Swap
																		</button>
																	</div>
								</div>
								<div className="swap-card" style={{...cardStyle, minHeight: 0, padding: '18px 18px 20px 18px'}}>
									{aiMode ? (
										<div className="swap-bot-form">
											<div>
												<label>Command:</label>
												<input
													type="text"
													value={command}
													onChange={e => setCommand(e.target.value)}
													placeholder="e.g. Swap 10 ETH to USDC"
													style={{ width: '100%' }}
												/>
											</div>
											<div>
												<label>From:</label>
												<input type="text" value={aiFromToken} readOnly style={{ width: '100%', background: '#f5f5f5' }} />
											</div>
											<div>
												<label>To:</label>
												<input type="text" value={aiToToken} readOnly style={{ width: '100%', background: '#f5f5f5' }} />
											</div>
											<div>
												<label>Amount:</label>
												<input type="text" value={aiAmount} readOnly style={{ width: '100%', background: '#f5f5f5' }} />
											</div>
											<button className="swap-bot-btn" onClick={() => {
												setAiLoading(true);
												setAiResult(null);
												setTimeout(() => {
													setAiResult(
														`AI Bot swapped ${aiAmount} ${aiFromToken} to ${(parseFloat(aiAmount || '0') * 0.99).toFixed(4)} ${aiToToken} on testnet.` +
														(command ? `\nCommand: ${command}` : '')
													);
													setAiLoading(false);
												}, 1500);
											}} disabled={aiLoading || !aiAmount || aiFromToken === aiToToken}>
												{aiLoading ? 'Swapping...' : 'AI Swap'}
											</button>
											{aiResult && <div className="swap-bot-result">{aiResult}</div>}
										</div>
									) : (
										<>
											{/* Wallet address and toggle inline at the top */}
											<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 18, marginTop: 8 }}>
												<WalletAddressDisplay isDark={isDark} />
												<div style={{ pointerEvents: 'none', opacity: 0.5 }}>
													<ToggleSwitch
														checked={true}
														onChange={() => {}}
														leftLabel="Mainnet"
														rightLabel="Testnet"
														theme={theme as 'dark' | 'light'}
													/>
												</div>
											</div>
											<div className="swap-section modern-swap-section" style={{ padding: 0, marginBottom: 18 }}>
												{/* FROM */}
												<div className="swap-input-row" style={{ borderBottom: '1px solid #ececec', borderTopLeftRadius: 18, borderTopRightRadius: 18, padding: '18px 14px 10px 14px' }}>
													<div className="swap-token-select-group">
														<img src={fromToken.logo} alt={fromToken.symbol} className="swap-token-logo" />
														<select
															className="swap-token-select modern-token-select"
															value={fromToken.symbol}
															onChange={e => setFromToken(tokens.find(t => t.symbol === e.target.value) || tokens[0])}
														>
															{tokens.map(token => (
																<option key={token.symbol} value={token.symbol}>{token.symbol}</option>
															))}
														</select>
													</div>
													<input
														className="swap-amount-input modern-amount-input"
														type="text"
														inputMode="decimal"
														pattern="[0-9]*\.?[0-9]*"
														placeholder="0.0"
														value={amount}
														onChange={e => {
															// Only allow numbers and decimal
															const val = e.target.value;
															if (/^\d*\.?\d*$/.test(val)) {
																setAmount(val);
																setToAmount(val && fromToken.symbol !== toToken.symbol ? (parseFloat(val) * 0.99).toFixed(4) : '');
															}
														}}
													/>
												</div>
												<div className="swap-input-label" style={{ marginLeft: 18, marginTop: 2 }}>From</div>
												<div className="swap-balance-row" style={{ marginTop: 2, marginLeft: 18, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
													<FaWallet style={{ color: '#2563eb', fontSize: 18 }} />
													<span className="swap-balance-value">{fromToken.symbol === 'ETH' ? '1.234' : fromToken.symbol === 'USDC' ? '500.00' : '10000.0'} {fromToken.symbol}</span>
												</div>
												{/* SWITCH BUTTON */}
												<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 0 0 0' }}>
													<button className="swap-switch-btn" onClick={handleSwitch} title="Switch tokens" style={{ position: 'relative', top: 0, zIndex: 2, margin: '-8px 0 -8px 0', background: '#fff', boxShadow: '0 2px 8px #0001' }}>⇅</button>
												</div>
												{/* TO */}
												<div className="swap-input-row" style={{ borderTop: '1px solid #ececec', borderBottomLeftRadius: 18, borderBottomRightRadius: 18, padding: '10px 14px 18px 14px' }}>
													<div className="swap-token-select-group">
														<img src={toToken.logo} alt={toToken.symbol} className="swap-token-logo" />
														<select
															className="swap-token-select modern-token-select"
															value={toToken.symbol}
															onChange={e => setToToken(tokens.find(t => t.symbol === e.target.value) || tokens[1])}
														>
															{tokens.map(token => (
																<option key={token.symbol} value={token.symbol}>{token.symbol}</option>
															))}
														</select>
													</div>
													<input
														className="swap-amount-input modern-amount-input"
														type="number"
														placeholder="0.0"
														value={toAmount}
														readOnly
													/>
												</div>
												<div className="swap-input-label" style={{ marginLeft: 18, marginTop: 2 }}>To</div>
												<div className="swap-balance-row" style={{ marginTop: 2, marginLeft: 18, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
													<FaWallet style={{ color: '#2563eb', fontSize: 18 }} />
													<span className="swap-balance-value">{toToken.symbol === 'ETH' ? '1.234' : toToken.symbol === 'USDC' ? '500.00' : '10000.0'} {toToken.symbol}</span>
												</div>
											</div>
											<button className="swap-action-btn" onClick={handleSwap} disabled={!amount || fromToken.symbol === toToken.symbol}>
												Swap
											</button>
										</>
									)}
								</div>
							</div>
						);
};
export default Swap;

