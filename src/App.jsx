import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}
