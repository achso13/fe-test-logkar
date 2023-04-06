import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-md px-4 py-8 md:px-8">{children}</main>
    </>
  );
}
