"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((o) => !o);
  const close = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold tracking-tight">
          Karlis Maldonado.dev
        </Link>

        <div className="hidden md:flex gap-6 text-sm">
          <Link href="/" className="hover:text-pink-300">
            Inicio
          </Link>
          <Link href="/about" className="hover:text-pink-300">
            Sobre mí
          </Link>
          <Link href="/projects" className="hover:text-pink-300">
            Proyectos
          </Link>
          <Link href="/contact" className="hover:text-pink-300">
            Contacto
          </Link>
        </div>

        {/* Botón hamburguesa (📱) */}
        <button
          aria-label="Abrir menú"
          onClick={toggle}
          className="md:hidden rounded-xl border border-white/10 px-3 py-2 hover:bg-white/10"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
          </div>
        </button>
      </div>

      {/* Menú 📱 */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/90">
          <div className="mx-auto max-w-6xl px-4 py-3 text-sm flex flex-col">
            <Link href="/" className="py-2 hover:text-pink-300" onClick={close}>
              Inicio
            </Link>
            <Link
              href="/about"
              className="py-2 hover:text-pink-300"
              onClick={close}
            >
              Sobre mí
            </Link>
            <Link
              href="/projects"
              className="py-2 hover:text-pink-300"
              onClick={close}
            >
              Proyectos
            </Link>
            <Link
              href="/contact"
              className="py-2 hover:text-pink-300"
              onClick={close}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
