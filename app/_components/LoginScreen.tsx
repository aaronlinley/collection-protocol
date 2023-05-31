'use client';

import GoogleLoginButton from "./GoogleLoginButton";
import TwitterLoginButton from "./TwitterLoginButton";
import { Roboto_Condensed } from 'next/font/google';
import Image from "next/image";

export default function LoginScreen({
  onGoogleButtonClick,
  onTwitterButtonClick,
}: {
  onGoogleButtonClick: () => void;
  onTwitterButtonClick: () => void;
}) {
  return <main className="flex flex-col justify-center min-h-screen p-12 xl:p-24">
    <div className="container mx-auto">
      <Image src="/main-logo.png" width="180" height="200" alt="Collection Protocol" className="block mx-auto mb-6" />
      <p className="text-center text-primary mb-6">Keep track of your collected <span className="font-medium">Marvel: Crisis Protocol</span> models and their various completion states.</p>
      <p className="text-center font-bold text-primary mb-4">Login below to get started:</p>

      <div className="flex flex-col items-center gap-4">
        <GoogleLoginButton onClick={onGoogleButtonClick} />
        <TwitterLoginButton onClick={onTwitterButtonClick} />
      </div>
    </div>
  </main>
}
