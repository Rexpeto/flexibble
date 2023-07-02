import "./globals.css";
import Providers from "./providers";

export const metadata = {
    title: "Flexibble",
    description: "Los mejores diseños de sitios web",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="es">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
};

export default RootLayout;
