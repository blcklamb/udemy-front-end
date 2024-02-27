export default function SubLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>{children}</div>
      <footer>@ 2024 blcklamb</footer>
    </div>
  );
}
