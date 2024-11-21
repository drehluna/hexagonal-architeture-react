export default function TodoContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex border border-gray-300 p-5 justify-between items-center gap-2">
      {children}
    </div>
  );
}
