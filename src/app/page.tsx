import ActiveLabel from "./components/active-label";
import NotActiveLabel from "./components/no-active-label";

export default function Home() {
  return (
    <main>
      <h1>Home page</h1>
      <ActiveLabel>Active</ActiveLabel>
      <NotActiveLabel>Not active</NotActiveLabel>
    </main>
  );
}
