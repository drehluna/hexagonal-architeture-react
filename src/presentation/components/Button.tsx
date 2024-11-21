export default function Button({
  className,
  children,
  disabled,
  onClick,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      className={className}
      {...props}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
