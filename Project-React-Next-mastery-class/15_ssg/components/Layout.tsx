import style from "./Layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className={style.header}>NARAS 🌍</header>
      <div className={style.main}>{children}</div>
    </div>
  );
}
