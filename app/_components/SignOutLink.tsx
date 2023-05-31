export default function SignOutLink({onSignOut}: {onSignOut: () => void}) {
  return <button className="font-bold text-sm uppercase tracking-widest absolute top-4 right-6 z-50 text-primary py-2 px-4 border-2 border-primary bg-white" onClick={onSignOut}>Sign Out</button>
}
