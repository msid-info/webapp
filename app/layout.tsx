import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/src/components/Navigation";
import Footer from "@/src/components/Footer";
import { appmedatadata } from "@/src/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "msid.info",
  description: "msid.info is a tool to help you understand your Entra ID Tenant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en">
	<head>
		<link rel="icon" href={appmedatadata.logolink} sizes="any" />
	</head>
	<body className={inter.className} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
		<div style={{ flex: 1 }}>
			<Navigation />
			{children}
		</div>
		<Footer />
	</body>
</html>  );
}
