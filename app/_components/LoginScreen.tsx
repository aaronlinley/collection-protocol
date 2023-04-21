'use client';

import GoogleLoginButton from "./GoogleLoginButton";
import TwitterLoginButton from "./TwitterLoginButton";

export default function LoginScreen({
  onGoogleButtonClick,
  onTwitterButtonClick,
}: {
  onGoogleButtonClick: () => void;
  onTwitterButtonClick: () => void;
}) {
  return <main className="flex min-h-screen p-24">
    <div className="container mx-auto">
      <h1 className="text-3xl text-center font-bold text-slate-700 mb-2">Collection Protocol</h1>
      <p className="text-center font-semibold text-slate-700 mb-6">Keep track of your collected Marvel: Crisis Protocol models and their various completion states.</p>
      <p className="text-center font-semibold text-slate-700 mb-6">Login below to get started:</p>

      <div className="flex flex-col items-center gap-4">
        <GoogleLoginButton onClick={onGoogleButtonClick} />
        <TwitterLoginButton onClick={onTwitterButtonClick} />
      </div>
    </div>
  </main>
}
