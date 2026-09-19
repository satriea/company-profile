 
export default function PageWrapper({ children, className = "" }) {
  return (
    <div
      className={`
        min-h-screen
        overflow-x-hidden
        bg-white
        text-slate-950
        antialiased
        ${className}
      `}
    >
      {children}
    </div>
  );
}