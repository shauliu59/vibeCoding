import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "个人财务分析看板",
    description: "暗黑风格财务仪表盘",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh" className="dark">
            <body className="bg-slate-950 text-slate-50 antialiased">{children}</body>
        </html>
    );
}
