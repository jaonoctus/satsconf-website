"use client";

import "@/app/globals.css";
import "@/app/styles/all.css";
import Footer from "../components/(landingpage)/footer";
import Header from "../components/(landingpage)/header";
import Manutencao from "./manutencao/page";
import { usePathname } from "next/navigation";
import { metadata } from "./metadata";
//PROVIDERS MODAL NOVIDADES
import { ModalProvider } from "@/providers/ModalContext";
import { DadosProvider } from "@/providers/DadosContext";
import { CookieProvider } from "@/providers/CookieContext";
import Cookies from "@/utils/cookies";

// Define o layout root com desestruturação de props
export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";
  const isHomePage = pathname === "/";

  console.log("Maintenance Mode:", process.env.NEXT_PUBLIC_MAINTENANCE_MODE);

  return (
    <html lang="pt-BR">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description}></meta>
        <meta name="keywords" content={metadata.keywords}></meta>
        <meta property="og:title" content={metadata.openGraph.title}></meta>
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        ></meta>
        <meta property="og:type" content={metadata.openGraph.type}></meta>
        <meta property="og:url" content={metadata.openGraph.url}></meta>
        {metadata.openGraph.images.map((image, index) => (
          <meta key={index} property="og:image" content={image}></meta>
        ))}
      </head>
      <body>
        {isMaintenanceMode && isHomePage ? (
          <Manutencao />
        ) : (
          <>
            <DadosProvider>
              <ModalProvider>
              <CookieProvider>
                <Header />
                {children}
                <Footer />
                <Cookies />
                </CookieProvider>
              </ModalProvider>
            </DadosProvider>
          </>
        )}
      </body>
    </html>
  );
}

console.log(metadata.title);
