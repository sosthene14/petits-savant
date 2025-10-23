import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Footer } from "@/components/footer"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Groupe Scolaire Les Petits Savants - Crèche, Maternelle, Primaire, Collège, Lycée",
  description: "École bilingue de la crèche au baccalauréat. Un univers d'apprentissage créatif et sécurisé.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
