import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Docs", href: "/docs/react" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="group">
          <h1 className="text-xl font-bold text-gray-900 transition group-hover:text-blue-600">
            Thanh Tài
          </h1>

          <p className="text-xs text-gray-500">
            Developer Portfolio
          </p>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/contact"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile menu indicator */}
        <div className="flex md:hidden">
          <Link
            href="/contact"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}