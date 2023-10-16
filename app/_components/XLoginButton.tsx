import Image from "next/image";
import twitterLogo from "../_assets/x.svg";

export default function XLoginButton({
  onClick
}: {
  onClick: () => void;
}) {
  return <button className="bg-black border border-black text-slate-100 flex items-center rounded-sm" onClick={onClick}>
    <span className="block p-3 border-e border-gray-600">
      <Image src={twitterLogo} alt="Twitter logo" width="18" height="18" />
    </span>
    <span className="block px-4">Sign In with X</span>
  </button>
}
