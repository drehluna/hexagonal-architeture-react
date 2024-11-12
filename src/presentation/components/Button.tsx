export default function Button({
  className,
  children,
  ...props
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
