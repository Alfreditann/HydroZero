import { Roboto } from "next/font/google";
import Navbar from "./navbar";
import "./butikk.css";
import Footer from "./Footer";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={roboto.className}>
        <Navbar></Navbar>

        {children}
        
        <Footer />
      </body>
    </html>
  );
}
