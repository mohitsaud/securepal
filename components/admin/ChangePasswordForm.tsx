'use client';

import { useState, type FormEvent } from 'react';
import { CheckCircle2, Eye, EyeOff, KeyRound, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ChangePasswordForm() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (newPassword.length < 8) {
      setError('New password must be at least 8 characters long.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('New password and confirmation password do not match.');
      return;
    }

    if (currentPassword === newPassword) {
      setError('New password must be different from your current password.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/admin/password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentPassword,
          newPassword,
          confirmPassword,
        }),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
        message?: string;
      };

      if (!response.ok || !result.ok) {
        setError(result.error ?? 'Failed to update password.');
        return;
      }

      setSuccess(result.message ?? 'Password updated successfully!');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch {
      setError('Unable to reach the server. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Success banner */}
      {success && (
        <div
          role="status"
          className="flex items-center gap-2.5 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs sm:text-sm font-medium text-emerald-800"
        >
          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
          <span>{success}</span>
        </div>
      )}

      {/* Error banner */}
      {error && (
        <div
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-xs sm:text-sm font-medium text-danger"
        >
          {error}
        </div>
      )}

      {/* Current password */}
      <div>
        <label className="block text-xs sm:text-sm font-semibold text-navy">
          Current password
          <div className="relative mt-1.5">
            <Input
              type={showCurrent ? 'text' : 'password'}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
              autoComplete="current-password"
              placeholder="••••••••"
              className="pr-10 text-sm"
            />
            <button
              type="button"
              onClick={() => setShowCurrent(!showCurrent)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-navy transition-colors cursor-pointer"
              aria-label={showCurrent ? 'Hide current password' : 'Show current password'}
            >
              {showCurrent ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </label>
      </div>

      {/* New password */}
      <div>
        <label className="block text-xs sm:text-sm font-semibold text-navy">
          New password
          <div className="relative mt-1.5">
            <Input
              type={showNew ? 'text' : 'password'}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              minLength={8}
              autoComplete="new-password"
              placeholder="At least 8 characters"
              className="pr-10 text-sm"
            />
            <button
              type="button"
              onClick={() => setShowNew(!showNew)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-navy transition-colors cursor-pointer"
              aria-label={showNew ? 'Hide new password' : 'Show new password'}
            >
              {showNew ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </label>
        <p className="mt-1 text-[11px] text-muted-foreground">
          Must be at least 8 characters long. Hashed with salted scrypt.
        </p>
      </div>

      {/* Confirm new password */}
      <div>
        <label className="block text-xs sm:text-sm font-semibold text-navy">
          Confirm new password
          <div className="relative mt-1.5">
            <Input
              type={showConfirm ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={8}
              autoComplete="new-password"
              placeholder="Re-enter new password"
              className="pr-10 text-sm"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-navy transition-colors cursor-pointer"
              aria-label={showConfirm ? 'Hide confirmation password' : 'Show confirmation password'}
            >
              {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </label>
      </div>

      {/* Submit button */}
      <div className="pt-2">
        <Button
          type="submit"
          disabled={isSubmitting || !currentPassword || !newPassword || !confirmPassword}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              <span>Updating password…</span>
            </>
          ) : (
            <>
              <KeyRound className="h-4 w-4" aria-hidden="true" />
              <span>Update password</span>
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
