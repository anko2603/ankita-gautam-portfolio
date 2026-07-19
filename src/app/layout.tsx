import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-heading",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-body",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Ankita Gautam | Shopify & WordPress Developer Portfolio",
    description: "Shopify & WordPress developer specializing in custom theme design, liquid customization, plugin integration, and high-performance e-commerce storefronts. Check out my work.",
    keywords: [
        "Shopify Developer",
        "WordPress Developer",
        "E-Commerce developer",
        "Shopify Liquid Customization",
        "WooCommerce Developer",
        "Ankita Gautam"
    ],
    authors: [{ name: "Ankita Gautam" }],
    creator: "Ankita Gautam",
    metadataBase: new URL("https://ankitagautam.dev"), // Fallback domain
    openGraph: {
        title: "Ankita Gautam | Shopify & WordPress Developer Portfolio",
        description: "Shopify & WordPress developer specializing in custom theme design, liquid customization, plugin integration, and high-performance e-commerce storefronts.",
        url: "https://ankitagautam.dev",
        siteName: "Ankita Gautam Portfolio",
        locale: "en_US",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                try {
                                    var savedTheme = localStorage.getItem('theme');
                                    if (savedTheme === 'light-theme') {
                                        document.body.classList.add('light-theme');
                                    } else {
                                        document.body.classList.add('dark-theme');
                                    }
                                } catch (e) {}
                            })();
                        `,
                    }}
                />
            </head>
            <body className={`${outfit.variable} ${inter.variable}`}>
                {children}
            </body>
        </html>
    );
}
