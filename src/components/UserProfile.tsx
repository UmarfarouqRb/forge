import React, { useContext } from 'react';
import { UserContext } from '../providers/Login';

const UserProfile: React.FC<{ imageSize?: number }> = ({ imageSize = 82 }) => {
  const user = useContext(UserContext) as {
    twitterHandle?: string;
    profileImage?: string;
    email?: string;
    wallet?: string;
    googleName?: string;
    googleEmail?: string;
  } | null;

  // Unify display logic for all login types
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

  return (
    <div
      className="card d-flex flex-column align-items-center p-2"
      style={{ width: 220, minHeight: 120, fontSize: 13, borderRadius: 8, marginTop: 64, padding: 12, justifyContent: 'center' }}
    >
      <img
        src={displayImage}
        alt="User Avatar"
        className="rounded-circle mb-2"
        width={imageSize}
        height={imageSize}
        style={{ objectFit: 'cover', background: '#eee', display: 'block', margin: '0 auto' }}
      />
      <h6 className="mb-1 text-center" style={{ fontSize: 17, fontWeight: 700, marginTop: 8 }}>{displayName}</h6>
      {user?.email && (
        <p className="card-text text-muted mb-1 text-center" style={{ fontSize: 11 }}>
          {user.email}
        </p>
      )}
    </div>
  );
};

export default UserProfile;
