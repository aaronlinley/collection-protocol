import Image from "next/image";
import twitterLogo from "../_assets/twitter.svg";

export default function TwitterLoginButton({
  onClick
}: {
  onClick: () => void;
}) {
  return <button className="bg-sky-500 border border-sky-500 text-slate-100 flex items-center rounded-sm" onClick={onClick}>
    <span className="block p-3 border-e border-sky-600">
      <Image src={twitterLogo} alt="Twitter logo" width="18" height="18" />
    </span>
    <span className="block px-4">Sign In with Twitter</span>
  </button>
}
