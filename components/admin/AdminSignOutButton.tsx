'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function AdminSignOutButton() {
  const router = useRouter();
  const [error, setError] = useState('');

  async function signOut() {
    setError('');
    try {
      const response = await fetch('/api/admin/session', { method: 'DELETE' });
      if (!response.ok) {
        setError('Unable to sign out. Please try again.');
        return;
      }
      router.replace('/admin/login');
      router.refresh();
    } catch {
      setError('Unable to reach the server. Please try again.');
    }
  }

  return (
    <div>
      <Button
        type="button"
        variant="outline"
        onClick={signOut}
        className="w-full border-[#1f3550] bg-transparent text-slate-300 hover:border-slate-500 hover:bg-white/5 hover:text-white"
      >
        Sign out
      </Button>
      {error && <p role="alert" className="mt-1 text-xs text-danger">{error}</p>}
    </div>
  );
}
