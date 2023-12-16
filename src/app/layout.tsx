import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const inter = Inter({
	style: ["normal"],
	subsets: ["latin"],
	variable: "--font-inter",
	preload: true,
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
	modal,
	menu,
}: {
	children: React.ReactNode;
	modal: React.ReactNode;
	menu: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.variable} relative font-sans`}>
				<Header />
				{children}
				{modal}
				<Footer />
			</body>
		</html>
	);
}
