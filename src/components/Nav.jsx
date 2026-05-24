function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-10 bg-slate-50/80 backdrop-blur border-b border-slate-200 shadow-sm">
      <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#top" className="font-semibold text-indigo-600">cole.dev</a>
        <div className="flex gap-6 text-sm text-slate-500">
          {links.map(link => (
            <a key={link.href} href={link.href} className="hover:text-slate-900 transition">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Nav;