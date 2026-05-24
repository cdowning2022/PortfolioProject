function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#top" className="font-semibold">cole.dev</a>
        <div className="flex gap-6 text-sm text-gray-600">
          {links.map(link => (
            <a key={link.href} href={link.href} className="hover:text-gray-900 transition">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Nav;