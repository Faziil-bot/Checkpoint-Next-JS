import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "My Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}