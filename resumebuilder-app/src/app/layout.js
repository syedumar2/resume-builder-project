import "./globals.css";



export const metadata = {
  title: "Resume Builder Project",
  description: "Created by Syed Umar as a part of my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        {children}
      </body>
    </html>
  );
}
