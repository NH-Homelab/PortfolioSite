export default function Section({children, className}: Readonly<{children: React.ReactNode, className?: string}>) {
  return (
    <div className={`w-screen h-screen ${className}`}>
      {children}
    </div>
  );
}