// import Image from "next/image"; 

export const metadata = {
  title: "Asistente personal — (Publicado)",
  description:
    "Asistente tipo chat con tareas, recordatorios, memoria conversacional y personalidad ajustable,. Python (Django/FastAPI).",
};

type Clip = {
  id: string;
  title: string;
  summary: string;
  src: string;
  poster?: string;
};

export default function AsistentePage() {
  const clips: Clip[] = [
    {
      id: "asistente-flujo",
      title: "Configuración de Identidad y Perfil Dinámico",
      summary: "En este clip muestro el proceso de autenticación y personalización del asistente. A través de un formulario conectado a una base de datos SQLite, el usuario puede definir la personalidad única de su IA. Aquí vemos cómo las instrucciones de sistema se actualizan en tiempo real para transformar el tono y comportamiento del modelo Gemini, permitiendo una experiencia totalmente a medida.",
      src: "/videos/asistente-flujo.mp4",
      poster: "/videos/asistente-flujo.jpg",
    },
    {
      id: "asistente-memoria",
      title: "Interacción Inteligente y Notificaciones Multiplataforma",
      summary: "Demostración del flujo de trabajo completo: desde la creación de un recordatorio mediante lenguaje natural en el chat, hasta la ejecución de la tarea programada (Cronjob). El video captura el momento exacto en que el servidor procesa la tarea pendiente y dispara una notificación push automática a Telegram, manteniendo al usuario informado incluso fuera de la aplicación web.",
      src: "/videos/asistente-memoria.mp4",
      poster: "/videos/asistente-memoria.jpg",
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
          <h1 className="text-2xl md:text-3xl font-bold">Asistente personal</h1>
          <br />
          <p className="max-w-3xl text-neutral-300">
           Desarrollé una <strong>aplicación web integral</strong> que funciona
            como un <strong>asistente personal inteligente </strong>
             que por defecto se comporta como <strong>Satoru Gojo
              (un personaje de anime)</strong>, o puedes
              <strong>personalizar el comportamiento del asistente</strong>), utilizando
             el <strong>modelo Gemini 1.5 Flash de Google</strong>{" "}
          </p>
          <br></br>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-300">
           💟<strong>Personalización Dinámica:</strong> Implementé un sistema donde el 
           usuario puede definir la *personalidad* del asistente en la base de datos,
            la cual se inyecta en las instrucciones de sistema de la IA en tiempo real.
            <br></br>
            💟<strong>Gestión de Recordatorios:</strong> Sistema completo de CRUD para 
            recordatorios, permitiendo al asistente ayudar en la organización diaria del usuario.
            <br></br>
            💟<strong>Notificaciones Externas (Telegram): </strong>Integración con la API de 
            Telegram mediante un Bot y Comandos de Gestión de Django para enviar notificaciones
             push al dispositivo móvil cuando un recordatorio vence.
             <br></br>
             💟<strong>Arquitectura de Servidor: </strong>Configuración de Cron Jobs para la ejecución
              automatizada de tareas en segundo plano y despliegue exitoso en la nube (Render).
              <br></br>
              💟<strong>Stack Tecnológico: </strong>Python, Django, PostgreSQL, Google Generative
               AI SDK, Telegram API y CSS responsivo.
               <br></br>
               <br></br>
               El sistema no solo responde mensajes, sino que *sale* de la web para notificar al usuario 
               en sus dispositivos personales, resolviendo el problema de la asincronía en aplicaciones
                web tradicionales.

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
      <h2 className="text-xl md:text-2xl font-semibold">
        🎥 Clips explicativos
      </h2>
      <p className="mt-1 text-sm text-neutral-400">
        Videos cortos con una vista previa de funcionalidades clave y su
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
