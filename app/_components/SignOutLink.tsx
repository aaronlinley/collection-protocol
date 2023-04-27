export default function SignOutLink({onSignOut}: {onSignOut: () => void}) {
  return <button className="font-bold text-sm uppercase tracking-widest absolute top-4 right-6 z-50 text-slate-700 py-2 px-4 border-2 border-slate-700" onClick={onSignOut}>Sign Out</button>
}
