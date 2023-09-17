import Header from "./_components/Header";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider>
      <html
        data-theme="dark"
        lang="en"
        className="h-[100%] w-[100%] fixed overflow-y-auto"
      >
        <body className="h-[100%] w-[100%] fixed overflow-y-auto">
          <Header title={metadata.title} />

          <div className="flex flex-row items-center justify-center min-h-[calc(100%-114px)]">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
