export const metadata = {
  title: "Adopta un gato",
  description:
    "Aplicación fullstack para adoptar gatitos, gestionar adopciones y administración con roles. Next.js + TypeScript + Tailwind + NextAuth + MongoDB/Mongoose.",
};

type Clip = {
  id: string;
  title: string;
  summary: string;
  src: string;
  poster?: string;
};

export default function GatitosPage() {
  const clips: Clip[] = [
    {
      id: "gatitos-arquitectura",
      title: "Arquitectura & Stack",
      summary:
        "Next.js App Router + TypeScript + Tailwind. Server/Client Components y routing anidado. Deploy en Vercel con previews → rendimiento y reutilización.",
      src: "../VideoKarlis1.mp4",
      poster: "../capgato1.jpeg",
    },
    {
      id: "gatitos-api",
      title: "Datos: API Routes + MongoDB + SWR",
      summary:
        "La UI consume API Routes sobre MongoDB (modelo Cat). SWR maneja caché/revalidación/hidratación para sincronía sin bloquear la interfaz.",
      src: "../VideoKarlis2.mp4",
      poster: "../capgato2.jpeg",
    },
    {
      id: "gatitos-ui",
      title: "Interacción: Form controlado + Optimistic UI.",
      summary:
        "Formulario controlado con validaciones. Al adoptar, uso Optimistic UI con SWR mutate: feedback inmediato y luego confirmación del servidor.",
      src: "../VideoKarlis3.mp4",
      poster: "../capgato3.jpeg",
    },
    {
      id: "gatitos-seguridadyroles",
      title: "Seguridad & Roles: NextAuth + UI basada en permisos.",
      summary:
        "Autenticación con NextAuth (JWT) y roles. Rutas y componentes se muestran/ocultan según permisos → autorización coherente en el cliente.",
      src: "../VideoKarlis4.mp4",
      poster: "../capgato4.jpeg",
    },
  ];

  return (
    <main className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-6 space-y-2">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
            <span className="size-1.5 rounded-full bg-green-400" />
            Publicado
          </span>
          <h1 className="text-2xl md:text-3xl font-bold">Adopta un gato</h1>
          <p className="max-w-3xl text-neutral-300">
            App para gestionar adopciones: listado, ficha, estados y panel con
            roles (owner/admin/user). Stack: Next.js 15, TypeScript, Tailwind,
            NextAuth y MongoDB/Mongoose.
          </p>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-300">
            Me gusto la idea de crear este proyecto full-stack para practicar{" "}
            <strong>UI→API→BD→auth</strong> con un caso real. Incluye{" "}
            <strong>panel admin</strong> con{" "}
            <strong>tabla de solicitantes</strong> (contacto, gato, fecha) y{" "}
            <strong>edición de gatos</strong> (CRUD/estado). Stack:{" "}
            <strong>Next.js/TS + Tailwind</strong>,
            <strong> NextAuth (roles)</strong>, <strong>MongoDB</strong> en{" "}
            <strong>Vercel</strong>. Aprendí
            <strong> modelado de datos</strong>,{" "}
            <strong>API Routes/Server Actions</strong>, gestión por permisos y
            accesibilidad.
          </p>

          <p className="mt-2 text-xs italic text-neutral-400/90">
            Los gatos de las fotos son míos o de mis amigas. Ningún modelo
            felino fue sobornado (mucho).
          </p>
          <br />
        </header>

        <ClipsSection clips={clips} />
      </div>
    </main>
  );
}

function ClipsSection({ clips }: { clips: Clip[] }) {
  return (
    <section className="mt-8">
      <h2 className="text-xl md:text-3xl font-semibold">
        🎥 Clips explicativos
      </h2>
      <p className="mt-1 text-sm text-neutral-400">
        Breves videos con la explicación de las decisiones técnicas y su
        implementación.
      </p>

      <div className="mt-6 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(420px,1fr))]">
        {clips.map((clip) => (
          <article
            key={clip.id}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 focus-within:ring-2 focus-within:ring-pink-400/40"
          >
            <div className="aspect-video">
              <video
                className="h-full w-full bg-black/20"
                src={clip.src}
                controls
                preload="metadata"
                playsInline
                poster={clip.poster}
                aria-label={clip.title}
              />
            </div>
            <div className="space-y-1.5 p-4">
              <h3 className="text-base font-semibold">{clip.title}</h3>
              <p className="text-sm text-neutral-300">{clip.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
