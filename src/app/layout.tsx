import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://https://portafolioweb-sandy.vercel.app/"),
  title: {
    default: "Karlis Maldonado — Portafolio",
    template: "%s · Karlis Maldonado",
  },
  description:
    "Desarrollador Web • React • Next.js • SQL • TypeScript • Python • Django",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Karlis Maldonado — Portafolio",
    description:
      "Proyectos y contacto de un desarrollador especializado en React, Next.js y TypeScript.",
    siteName: "karlis.dev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Karlis Maldonado — Portafolio",
      },
    ],
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karlis Maldonado — Portafolio",
    description:
      "Proyectos y contacto de un desarrollador especializado en React, Next.js y TypeScript.",
    images: ["/og-image.png"],
    creator: "@tu_usuario",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-400">
        © {new Date().getFullYear()} Karlis Maldonado — hecho con Next.js +
        Tailwind
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh bg-black text-white overflow-x-clip flex flex-col`}
      >
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div
            className="absolute -top-32 -left-24 size-[42rem] rounded-full blob"
            style={{
              background:
                "conic-gradient(from 200deg, #ff2d95, #7c3aed 35%, #00e5ff 75%, #ff2d95)",
            }}
          />
          <div
            className="absolute -bottom-48 left-1/3 size-[36rem] rounded-full blob"
            style={{
              background:
                "radial-gradient(circle at 40% 40%, #0ea5e9, transparent 60%)",
            }}
          />
          <div
            className="absolute -right-32 top-1/4 size-[34rem] rounded-full blob"
            style={{
              background:
                "radial-gradient(circle at 60% 40%, #f472b6, transparent 60%)",
            }}
          />
        </div>
        <div className="fixed inset-0 -z-10 noise-overlay" />

        <Navbar />

        <main className="relative mx-auto max-w-6xl px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
