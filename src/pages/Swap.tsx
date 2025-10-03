import React, { useState, useContext } from 'react';
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
import { Link } from 'react-router-dom';
import './Swap.css';

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
	const { theme } = useContext(ThemeContext);
	const [fromToken, setFromToken] = useState(tokens[2]); // Default to MON
	const [toToken, setToToken] = useState(tokens[1]);
	const [amount, setAmount] = useState('');
	const [toAmount, setToAmount] = useState('');
		const [network, setNetwork] = useState<'mainnet' | 'testnet'>('mainnet');
		const [showSuccess, setShowSuccess] = useState(false);
		const [successMsg, setSuccessMsg] = useState('');


		const handleSwap = () => {
			if (!amount) return;
			if (fromToken.symbol === toToken.symbol) {
				alert('Please select different tokens to swap.');
				return;
			}
			setSuccessMsg(`Successfully swapped ${amount} ${fromToken.symbol} for ${(parseFloat(amount) * 0.99).toFixed(4)} ${toToken.symbol} on ${network}.`);
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
															<div style={{ fontSize: 22, fontWeight: 700, color: robotColor, marginBottom: 8, letterSpacing: 1 }}>click me</div>
															<Link to="/swap-bot" style={{ display: 'inline-block' }}>
																<FaRobot style={{ color: robotColor, fontSize: 140, marginBottom: 10, cursor: 'pointer', transition: 'transform 0.15s' }} />
															</Link>
															<div style={{ fontSize: 18, color: robotColor, fontWeight: 600, marginTop: 18, marginBottom: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
																Use our AI agents to seamlessly swap. Select your network and token, enter the amount and let the AI handle the rest!
															</div>
														</div>
									<div className="swap-card" style={{...cardStyle, minHeight: 0, padding: '18px 18px 20px 18px'}}>
																{/* Wallet address and toggle inline at the top */}
																<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 18, marginTop: 8 }}>
																	<WalletAddressDisplay isDark={isDark} />
																	<ToggleSwitch
																		checked={network === 'testnet'}
																		onChange={checked => setNetwork(checked ? 'testnet' : 'mainnet')}
																		leftLabel="Mainnet"
																		rightLabel="Testnet"
																		theme={theme as 'dark' | 'light'}
																	/>
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
											type="number"
											placeholder="0.0"
											value={amount}
											onChange={e => {
												setAmount(e.target.value);
												setToAmount(e.target.value && fromToken.symbol !== toToken.symbol ? (parseFloat(e.target.value) * 0.99).toFixed(4) : '');
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
			</div>
		</div>
	);
};

export default Swap;

