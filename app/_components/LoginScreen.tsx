'use client';

import GoogleLoginButton from "./GoogleLoginButton";
import TwitterLoginButton from "./TwitterLoginButton";
import { Roboto_Condensed } from 'next/font/google'

const roboto = Roboto_Condensed({ weight: ['700'], subsets: ['latin'] })

export default function LoginScreen({
  onGoogleButtonClick,
  onTwitterButtonClick,
}: {
  onGoogleButtonClick: () => void;
  onTwitterButtonClick: () => void;
}) {
  return <main className="flex flex-col justify-center min-h-screen p-12 xl:p-24">
    <div className="container mx-auto">
      <h1 className={`${roboto.className} text-4xl text-center font-bold text-slate-700 mb-2`}>Collection Protocol</h1>
      <p className="text-center text-slate-700 mb-6">Keep track of your collected Marvel: Crisis Protocol models and their various completion states.</p>
      <p className="text-center font-bold text-slate-700 mb-4">Login below to get started:</p>

      <div className="flex flex-col items-center gap-4">
        <GoogleLoginButton onClick={onGoogleButtonClick} />
        <TwitterLoginButton onClick={onTwitterButtonClick} />
      </div>
    </div>
  </main>
}
