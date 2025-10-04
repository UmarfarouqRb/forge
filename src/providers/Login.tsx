import React, { useEffect, createContext, useState } from 'react';
import SuccessModal from '../components/SuccessModal';
import { usePrivy } from '@privy-io/react-auth';
// User context for profile and other components
export const UserContext = createContext<any>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { authenticated, user } = usePrivy();
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    if (authenticated && user) {
      setUserData({
        twitterHandle: user.twitter?.username ?? undefined,
        profileImage: user.twitter?.profilePictureUrl ?? undefined,
        email: user.email?.address ?? undefined,
        wallet: user.wallet?.address ?? undefined,
      });
    }
  }, [authenticated, user]);

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
	const { login, ready, user } = usePrivy();
	const [modal, setModal] = useState<{ show: boolean; message: string }>({ show: false, message: '' });
	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			// Determine registration method
			let method = '';
			let email = '';
			if (user.google) {
				method = 'google';
				email = user.google.email;
			} else if (user.email) {
				method = 'email';
				email = user.email.address;
			}
			if (email && method) {
				fetch('http://localhost:4000/api/register', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ email, method })
				})
					.then(async res => {
						const data = await res.json();
						if (!res.ok) throw new Error(data.message || 'Registration error');
						if (data.success) {
							setModal({ show: true, message: 'Registration successful!' });
						}
					})
					.catch(err => {
						setModal({ show: true, message: err.message });
					});
			}
			// Redirect to dashboard after login
			navigate('/dashboard');
		}
	}, [user, navigate]);

	if (!ready) {
		return (
			<div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
			</div>
		);
	}

	// Determine display name and image for email/Google users
	let displayName = '';
	let displayImage = '';
	if (user) {
		if (user.google) {
			displayName = user.google.name || user.google.email || '';
			displayImage = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=random`;
		} else if (user.email) {
			displayName = user.email.address.split('@')[0];
			displayImage = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=random`;
		} else if (user.twitter) {
			displayName = user.twitter.username ? String(user.twitter.username) : '';
			displayImage = user.twitter.profilePictureUrl ? String(user.twitter.profilePictureUrl) : '';
		}
	}

	return (
		<div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
			{user && (
				<div className="mb-4 d-flex flex-column align-items-center">
					{displayImage && (
						<img src={displayImage} alt="User" className="rounded-circle mb-2" width={64} height={64} />
					)}
					<h4 style={{ color: '#23272f', fontWeight: 700 }}>{displayName}</h4>
				</div>
			)}
			<h2 className="mb-4" style={{ color: '#a47be2ff' }}>Login to Forge</h2>
			<button className="btn btn-primary" style={{ fontSize: 20, backgroundColor: '#a47be2ff', color: '#d6d3e8ff', padding: '12px 36px', borderRadius: 8, border: 'none' }} onClick={login}>
				Login with Privy
			</button>
			<SuccessModal show={modal.show} message={modal.message} onClose={() => setModal({ show: false, message: '' })} />
		</div>
	);
};


export default Login;
