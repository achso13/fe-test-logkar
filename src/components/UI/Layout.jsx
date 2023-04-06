import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="px-4 py-8 md:px-8">{children}</main>
    </>
  );
}
