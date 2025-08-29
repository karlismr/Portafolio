import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="py-12 md:py-16" id="contacto">
      <h2 className="text-3xl md:text-4xl font-semibold">Contacto</h2>
      <p className="mt-2 text-neutral-300">
        ¿Te interesa colaborar? ¡Hablemos!
      </p>

      <div className="mt-8">
        <div className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="flex flex-col items-center text-center gap-5">
            {/* FOTO */}
            <div className="relative h-32 w-32 overflow-hidden rounded-full ring-1 ring-white/20">
              <Image
                src="/karlis.jpeg"
                alt="Foto de Karlis Maldonado"
                fill
                sizes="128px"
                className="object-cover"
                priority
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Karlis Maldonado</h3>
              <p className="mt-1 text-neutral-300">
                Desarrolladora Web — Full Stack Developer
              </p>
            </div>

            {/* LINKS */}
            <div className="mt-2 grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
              <a
                href="mailto:karlisamaldonador@gmail.com"
                className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 hover:bg-white/10 transition"
                aria-label="Enviar correo"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5">
                  <path
                    d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm0 0 8 6 8-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
                <span className="group-hover:text-pink-300">Email</span>
              </a>

              <a
                href="https://github.com/karlismr"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 hover:bg-white/10 transition"
                aria-label="Abrir GitHub"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5">
                  <path
                    d="M12 2a10 10 0 0 0-3.16 19.48c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.19-3.37-1.19a2.65 2.65 0 0 0-1.1-1.45c-.9-.62.07-.61.07-.61a2.1 2.1 0 0 1 1.53 1.03 2.14 2.14 0 0 0 2.92.84 2.13 2.13 0 0 1 .64-1.34c-2.22-.25-4.56-1.11-4.56-4.94A3.87 3.87 0 0 1 6.2 7.5a3.6 3.6 0 0 1 .1-2.65s.84-.27 2.74 1.03a9.42 9.42 0 0 1 5 0c1.9-1.3 2.74-1.03 2.74-1.03.37.84.4 1.8.1 2.65a3.87 3.87 0 0 1 1.03 2.68c0 3.84-2.34 4.69-4.57 4.94a2.4 2.4 0 0 1 .69 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="group-hover:text-pink-300">GitHub</span>
              </a>

              <a
                href="https://wa.me/+56934847101?text=Hola%20Karlis%2C%20vi%20tu%20portafolio%20%F0%9F%91%8B"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 hover:bg-white/10 transition"
                aria-label="Enviar WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5">
                  <path
                    d="M20.5 11.8a8.5 8.5 0 0 1-12.91 7.19L4 20l1.05-3.5A8.5 8.5 0 1 1 20.5 11.8Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8.5 9.8c.1 2.9 3.1 5.4 5.9 5.7.5.1 1.2-.2 1.4-.7l.3-.8c.1-.3 0-.5-.3-.7l-1-.4c-.3-.1-.6 0-.7.2l-.3.4c-.1.2-.3.2-.5.1-1.1-.5-2-1.4-2.5-2.5-.1-.2 0-.4.1-.5l.4-.3c.2-.1.3-.4.2-.7l-.4-1c-.2-.3-.4-.4-.7-.3l-.8.3c-.5.2-.8.9-.7 1.4Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="group-hover:text-pink-300">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
