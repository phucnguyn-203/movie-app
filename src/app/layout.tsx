import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const roboto = Roboto({
    subsets: ["latin"],
    style: ["normal", "italic"],
    weight: ["100", "300", "400", "500", "700", "900"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Movine",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${roboto.className} antialiased`}>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
}
