import { ReactNode } from 'react';
import ReduxProvider from '../reduxs/provider';

export const metadata = {
  title: "Liam's Page",
  description: 'A fun site to build using Next.js, Spring Boot, and Cypress :3',
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
