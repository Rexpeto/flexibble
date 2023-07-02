import Link from "next/link";

const FooterColumn = ({ data }: { data: any }) => {
    const { title, links } = data;
    return (
        <div className="footer_column">
            <h4 className="font-semibold">{title}</h4>
            <ul className="flex flex-col gap-2 font-normal">
                {links.map((link: string) => (
                    <Link href="/" key={link}>
                        {link}
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default FooterColumn;
