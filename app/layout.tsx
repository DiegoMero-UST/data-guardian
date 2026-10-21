import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hello World",
  description: "Hello World",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" style={{ colorScheme: "light" }}>
      <body style={{ margin: 0, background: "#fff", color: "#000" }}>
        {children}
      </body>
    </html>
  );
}
