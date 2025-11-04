import './globals.css'

export const metadata = {
  title: 'Valorant Players from CS:GO',
  description: 'Professional Valorant esports players who competed in tier 1 CS:GO',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
