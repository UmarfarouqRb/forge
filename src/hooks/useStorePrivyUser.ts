import { useEffect } from 'react';

export function useStorePrivyUser(userData: any) {
  useEffect(() => {
    if (!userData || !userData.email) return;
    // Call backend API to store user
    fetch('/api/privyUsers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...userData, loginProvider: 'privy', createdAt: new Date().toISOString() })
    });
  }, [userData]);
}
