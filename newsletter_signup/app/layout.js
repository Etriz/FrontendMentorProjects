import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight:['400','700'],subsets: ['latin'] })

export const metadata = {
  title: 'Frontend Mentor | Newsletter sign-up form with success message',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}
      <div>
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="#">Ryan Paulson</a>.
    </div>
    </body>
    </html>
  )
}
