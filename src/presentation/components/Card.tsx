export default function Card({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-white rounded-lg p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}
