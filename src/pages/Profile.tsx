import React, { useContext, useState } from 'react';
import { SiWalletconnect } from 'react-icons/si';
import { ThemeContext } from '../App';
import SuccessModal from '../components/SuccessModal';
import { useNavigate } from 'react-router-dom';

import { usePrivy } from '@privy-io/react-auth';
import { UserContext } from '../providers/Login';

const Profile: React.FC = () => {
  const user = useContext(UserContext) as {
    twitterHandle?: string;
    profileImage?: string;
    email?: string;
    wallet?: string;
    googleName?: string;
    googleEmail?: string;
  } | null;
  const [edit, setEdit] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { logout, linkWallet } = usePrivy();
  // Determine display name and image for all login types
  let displayName = 'User Name';
  let displayImage = 'https://ui-avatars.com/api/?name=User&background=random';
  if (user) {
    if (user.twitterHandle) {
      displayName = user.twitterHandle;
      displayImage = user.profileImage || displayImage;
    } else if (user.email) {
      displayName = user.email.split('@')[0];
      displayImage = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=random`;
    } else if (user.googleName || user.googleEmail) {
      displayName = user.googleName || user.googleEmail || displayName;
      displayImage = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=random`;
    }
  }
  const [form, setForm] = useState({
    twitterHandle: user?.twitterHandle || '',
    email: user?.email || '',
    wallet: user?.wallet || '',
  });
  // Removed externalWallet state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Save logic (API or context update)
    setEdit(false);
    setShowSuccess(true);
  };

  return (
    <section className="container py-4" style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 0 }}>
      <div className="card shadow-sm border-0 p-4" style={{ position: 'relative', minHeight: 520, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
        <div style={{ position: 'absolute', top: 12, right: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
          <button onClick={() => navigate(-1)} style={{ borderRadius: 10, background: 'none', fontSize: 22, cursor: 'pointer', color: '#888', border: 'none' }} title="Close">&times;</button>
          <span
            onClick={toggleTheme}
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: 22, color: '#888', margin: 0 }}
            title="Toggle theme"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </span>
        </div>
        {/* Profile info always at the top */}
        <div className="d-flex flex-column align-items-center mb-3" style={{ width: '100%' }}>
          <img
            src={displayImage}
            alt="User Avatar"
            className="rounded-circle mb-1"
            width={48}
            height={48}
            style={{ objectFit: 'cover', border: '1.5px solid #eee' }}
          />
          <div style={{ fontWeight: 600, fontSize: 16, textAlign: 'center', width: '100%' }}>
            {user?.twitterHandle
              ? `@${user.twitterHandle}`
              : user?.googleName
                ? user.googleName
                : user?.email
                  ? user.email.split('@')[0]
                  : 'No Name'}
          </div>
          <div style={{ fontSize: 13, color: '#555', textAlign: 'center', width: '100%', letterSpacing: 0.5 }}>
            {user && user.wallet
              ? `${user.wallet.slice(0, 5)}...${user.wallet.slice(-5)}`
              : 'No wallet'}
          </div>
        </div>
        {/* WalletConnect and action buttons moved way down for space */}
        <div style={{ flexGrow: 1 }}></div>
        <div className="d-flex flex-column align-items-center gap-2 mb-4" style={{ width: '100%' }}>
        {/* WalletConnect button will be moved below Deposit/Withdraw */}
        </div>
        <div className="d-flex flex-column align-items-center mb-3" style={{ width: '100%' }}>
          <button
            className="btn btn-outline-primary"
            style={{ width: 140, fontSize: 15, padding: '8px 12px', borderRadius: 10, border: '1.5px solid #3386f5', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}
            onClick={linkWallet}
          >
            <SiWalletconnect size={22} style={{ color: '#3386f5', flexShrink: 0 }} />
            Add External Wallet
          </button>
        </div>
  <div className="d-flex flex-row align-items-center gap-2 mb-2" style={{ justifyContent: 'center', width: '100%' }}>
          <button
            className="btn btn-sm flex-fill"
            style={{ background: '#111', color: '#fff', border: '1px solid #111', minWidth: 100, flex: 1 }}
            onClick={() => navigate('/deposit')}
          >
            Deposit
          </button>
          <button
            className="btn btn-sm flex-fill"
            style={{ background: '#fff', color: '#111', border: '1px solid #111', minWidth: 100, flex: 1 }}
            onClick={() => navigate('/withdraw')}
          >
            Withdraw
          </button>
        </div>
        <div className="d-flex flex-row align-items-center gap-2 mb-5" style={{ justifyContent: 'center', width: '100%' }}>
          <button
            className="btn btn-outline-secondary btn-sm flex-fill"
            style={{ minWidth: 100, flex: 1 }}
            onClick={() => navigate('/history')}
          >
            History
          </button>
        </div>
        {edit ? (
          <form onSubmit={handleSave}>
            <div className="mb-2">
              <label className="form-label">Twitter Handle</label>
              <input type="text" className="form-control" name="twitterHandle" value={form.twitterHandle} onChange={handleChange} />
            </div>
            <div className="mb-2">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} />
            </div>
            <div className="mb-2">
              <label className="form-label">Wallet</label>
              <input type="text" className="form-control" name="wallet" value={form.wallet} onChange={handleChange} />
            </div>
            <div className="d-flex gap-2 mt-3">
              <button className="btn btn-primary btn-sm flex-fill" type="submit">Save</button>
              <button className="btn btn-secondary btn-sm flex-fill" type="button" onClick={() => setEdit(false)}>Cancel</button>
            </div>
          </form>
        ) : (
          <>
            {user?.email && <p className="mb-1"><strong>Email:</strong> {user.email}</p>}
            {/* Wallet and username already shown above */}
            {/* External wallet display removed */}
            {/* Action buttons moved to card end */}
          </>
        )}
  <div className="d-flex gap-2 mt-auto pt-5" style={{ justifyContent: 'flex-end' }}>
          <button className="btn btn-outline-primary btn-sm flex-fill" style={{ maxWidth: 120 }} onClick={() => setEdit(true)}>Edit Profile</button>
          <button className="btn btn-outline-danger btn-sm flex-fill" style={{ maxWidth: 120 }} onClick={async () => {
            await logout();
            navigate('/dashboard');
          }}>Logout</button>
        </div>
      </div>
      <SuccessModal show={showSuccess} message="Profile updated successfully!" onClose={() => setShowSuccess(false)} />
    </section>
  );
};

export default Profile;
