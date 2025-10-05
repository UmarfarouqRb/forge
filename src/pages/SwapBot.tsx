import React, { useState, useEffect } from 'react';
import { FaRobot } from 'react-icons/fa';
import './SwapBot.css';

const SwapBot: React.FC = () => {
  const [command, setCommand] = useState('');
  const [fromToken, setFromToken] = useState('ETH');
  const [toToken, setToToken] = useState('USDC');
  const [amount, setAmount] = useState('');
  // Parse command like: Swap 10 ETH to USDC
  useEffect(() => {
    const match = command.match(/swap\s+(\d+(?:\.\d+)?)\s+(\w+)\s+to\s+(\w+)/i);
    if (match) {
      setAmount(match[1]);
      setFromToken(match[2].toUpperCase());
      setToToken(match[3].toUpperCase());
    }
  }, [command]);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSwap = async () => {
    setLoading(true);
    setResult(null);
    // Simulate AI agent swap logic
    setTimeout(() => {
      setResult(
        `AI Bot swapped ${amount} ${fromToken} to ${(parseFloat(amount) * 0.99).toFixed(4)} ${toToken} on testnet.` +
        (command ? `\nCommand: ${command}` : '')
      );
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="swap-bot-container">
      <h2 className="swap-bot-title"><FaRobot style={{ marginRight: 8 }} />AI Swap Bot</h2>
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
          <input type="text" value={fromToken} readOnly style={{ width: '100%', background: '#f5f5f5' }} />
        </div>
        <div>
          <label>To:</label>
          <input type="text" value={toToken} readOnly style={{ width: '100%', background: '#f5f5f5' }} />
        </div>
        <div>
          <label>Amount:</label>
          <input type="text" value={amount} readOnly style={{ width: '100%', background: '#f5f5f5' }} />
        </div>
        <button className="swap-bot-btn" onClick={handleSwap} disabled={loading || !amount || fromToken === toToken}>
          {loading ? 'Swapping...' : 'AI Swap'}
        </button>
      </div>
      {result && <div className="swap-bot-result">{result}</div>}
    </div>
  );
};

export default SwapBot;
