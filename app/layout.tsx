import "./globals.css"

export const metadata = {
    title: "Flexibble",
   description: "Los mejores diseños de sitios web"
}

const RootLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <html lang="es">
            <body>{children}</body>
        </html>
    )
}

export default RootLayout
