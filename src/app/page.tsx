import StatusLabel, { Status } from "./components/status-label";

export default function Home() {
  return (
    <main>
      <h1>Home page</h1>
      <h1 className="text-xl">Home page {new Date().toTimeString()}</h1>
      <StatusLabel status={Status.Active} >Active</StatusLabel>
      <StatusLabel status={Status.NotActive} disabled={true}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
    </main>
  );
}
