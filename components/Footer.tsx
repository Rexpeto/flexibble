import { footerLinks } from "@/constants";
import Image from "next/image";
import FooterColumn from "./FooterColumn";

const Footer = () => {
    const date = new Date();
    return (
        <footer className="flexStart footer border-t border-gray-50 dark:border-gray-800">
            <div className="flex flex-col gap-12 w-full">
                <div className="flex items-start flex-col">
                    <Image src="/logo-purple.svg" alt="flexibble" width={100} height={30} />
                    <p className="text-start text-sm font-normal mt-5 max-w-xs">
                        Flexibble es la comunidad líder mundial para que los creativos compartan,
                        crezcan y sean contratados
                    </p>
                </div>
                <div className="grid sm:grid-cols-5 gap-12 xs:grid-cols-2">
                    {footerLinks.map((link, index) => (
                        <FooterColumn key={index} data={link} />
                    ))}
                </div>
            </div>
            <div className="flexBetween footer_copyright">
                <p>&copy; {`${date.getFullYear()} Flexibble Todos los derechos reservados.`}</p>
                <p className="text-gray dark:text-light-white-200">
                    <span className="text-black dark:text-white font-semibold">500</span> Proyectos
                    enviados
                </p>
            </div>
        </footer>
    );
};

export default Footer;
