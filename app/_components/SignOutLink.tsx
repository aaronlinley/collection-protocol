export default function SignOutLink({onSignOut}: {onSignOut: () => void}) {
  return <button className="absolute top-4 right-6 z-50 text-slate-700" onClick={onSignOut}>Sign Out</button>
}
