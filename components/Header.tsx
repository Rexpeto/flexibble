import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
    const session = {}

    return (
        <nav className="flexBetween navbar dark:bg-gray-900">
            <div className="flex-1 flexStart gap-10">
                <Link href="/">
                    <Image className="dark:invert" src="/logo.svg" width={115} height={43} alt="Flexibble" />
                </Link>
                <ul className="xl:flex hidden text-small gap-7">
                    {NavLinks.map((link, index) => (
                        <Link key={link.key} href={link.href}>{link.text}</Link>
                    ))}
                </ul>
            </div>
            <div className="flexCenter gap-4">
                <ThemeSwitcher/>
                {session ? (
                    <>
                        PhotoUser
                        <Link href="/create-project">Compartir proyecto</Link>
                    </>
                ) : (
                    <div>xd</div>
                )}
            </div>
        </nav>
    );
};

export default Header;
