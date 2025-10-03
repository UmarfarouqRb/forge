import React from 'react';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  leftLabel: string;
  rightLabel: string;
  theme?: 'dark' | 'light';
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange, leftLabel, rightLabel, theme }) => {
  const isDark = theme === 'dark';
  const leftColor = isDark ? (checked ? '#bbb' : '#fff') : (checked ? '#888' : '#23272f');
  const rightColor = isDark ? (checked ? '#fff' : '#bbb') : (checked ? '#23272f' : '#888');
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <span style={{ fontWeight: checked ? 400 : 700, color: leftColor, fontSize: 15 }}>{leftLabel}</span>
      <label style={{ position: 'relative', display: 'inline-block', width: 48, height: 26, margin: 0 }}>
        <input
          type="checkbox"
          checked={checked}
          onChange={e => onChange(e.target.checked)}
          style={{ opacity: 0, width: 0, height: 0 }}
        />
        <span
          style={{
            position: 'absolute',
            cursor: 'pointer',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: !checked ? 'linear-gradient(90deg, #b39ddb 0%, #ede7f6 100%)' : '#f3eaff',
            borderRadius: 16,
            transition: 'background 0.2s',
            boxShadow: !checked ? '0 2px 8px #b39ddb33' : 'none',
            border: 'none',
          }}
        >
          <span
            style={{
              position: 'absolute',
              left: checked ? 24 : 2,
              top: 2,
              width: 22,
              height: 22,
              background: '#fff',
              borderRadius: '50%',
              boxShadow: '0 1px 4px #0001',
              transition: 'left 0.2s',
              border: 'none',
            }}
          />
        </span>
      </label>
  <span style={{ fontWeight: checked ? 700 : 400, color: rightColor, fontSize: 15 }}>{rightLabel}</span>
    </div>
  );
};

export default ToggleSwitch;
