import "./globals.css";

export const metadata = {
  title: "SkipAhead",
  description: "Skip Ahead!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      data-theme="dark"
      lang="en"
      className="h-[100%] w-[100%] fixed overflow-y-auto"
    >
      <body className="h-[100%] w-[100%] fixed overflow-y-auto">
        <div className="flex flex-row items-center justify-center min-h-[calc(100%-114px)]">
          {children}
        </div>
      </body>
    </html>
  );
}
