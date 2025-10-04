import React, { useContext, useState } from 'react';
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
  const { logout } = usePrivy();
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
    <section className="container py-4" style={{ maxWidth: 400,  marginLeft: 'auto', marginRight: 0 }}>
      <div className="card shadow-sm border-0 p-4" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: 12, right: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
          <button onClick={() => navigate(-1)} style={{ borderRadius: 10, background: 'none', fontSize: 22, cursor: 'pointer', color: '#888', border: 'none' }} title="Close">&times;</button>
          <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: 15, color: '#888', margin: 0 }}>
            <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} style={{ marginRight: 6 }} />
            {theme === 'dark' ? '🌙' : '☀️'}
          </label>
        </div>
        <div className="d-flex align-items-center mb-3">
          <img
            src={displayImage}
            alt="User Avatar"
            className="rounded-circle me-3"
            width={48}
            height={48}
          />
          <div>
            <h5 className="mb-0">{displayName}</h5>
            <small className="text-muted">Profile</small>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center gap-2 mb-3" style={{ justifyContent: 'center' }}>
          <button
            className="btn btn-sm"
            style={{ background: '#111', color: '#fff', border: '1px solid #111', minWidth: 100 }}
            onClick={() => navigate('/deposit')}
          >
            Deposit
          </button>
          <button
            className="btn btn-sm"
            style={{ background: '#fff', color: '#111', border: '1px solid #111', minWidth: 100 }}
            onClick={() => navigate('/withdraw')}
          >
            Withdraw
          </button>
          <button
            className="btn btn-outline-secondary btn-sm"
            style={{ minWidth: 100 }}
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
            <button className="btn btn-primary btn-sm me-2" type="submit">Save</button>
            <button className="btn btn-secondary btn-sm" type="button" onClick={() => setEdit(false)}>Cancel</button>
          </form>
        ) : (
          <>
            {user?.twitterHandle && <p className="mb-1"><strong>Twitter:</strong> @{user.twitterHandle}</p>}
            {user?.email && <p className="mb-1"><strong>Email:</strong> {user.email}</p>}
            {user?.wallet && (
              <p className="mb-1">
                <strong>Wallet:</strong> {user.wallet.length > 10
                  ? `${user.wallet.slice(0, 5)}...${user.wallet.slice(-5)}`
                  : user.wallet}
              </p>
            )}
            <button className="btn btn-outline-primary btn-sm mt-2" onClick={() => setEdit(true)}>Edit Profile</button>
            <button className="btn btn-outline-danger btn-sm mt-2" onClick={async () => {
              await logout();
              navigate('/dashboard');
            }}>Logout</button>
          </>
        )}
      </div>
      <SuccessModal show={showSuccess} message="Profile updated successfully!" onClose={() => setShowSuccess(false)} />
    </section>
  );
};

export default Profile;
