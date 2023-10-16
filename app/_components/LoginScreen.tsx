'use client';

import GoogleLoginButton from "./GoogleLoginButton";
import XLoginButton from "./XLoginButton";
import Image from "next/image";

export default function LoginScreen({
  onGoogleButtonClick,
  onTwitterButtonClick,
}: {
  onGoogleButtonClick: () => void;
  onTwitterButtonClick: () => void;
}) {
  return <main className="flex flex-col justify-center min-h-screen p-12 xl:p-24">
    <div className="container">
      <Image src="/logo.svg" width="200" height="185" alt="Collection Protocol" className="block mx-auto mb-2" />
    <h1 className="text-3xl text-center text-primary font-bold mb-4">Collection Protocol</h1>
      <p className="text-center text-primary mb-6">Keep track of your <span className="font-medium">Marvel: Crisis Protocol</span> model collection.</p>
      <p className="text-center font-bold text-primary mb-4">Login below to get started:</p>

      <div className="flex flex-col items-center gap-4">
        <GoogleLoginButton onClick={onGoogleButtonClick} />
        <XLoginButton onClick={onTwitterButtonClick} />
      </div>
    </div>
  </main>
}
