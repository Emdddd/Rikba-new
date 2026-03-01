export const metadata = {
  title: "Rikba",
  description: "Malta deserves a better ride."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            "system-ui, -apple-system, sans-serif",
          background: "#ffffff",
          color: "#111"
        }}
      >
        {children}
      </body>
    </html>
  );
}
