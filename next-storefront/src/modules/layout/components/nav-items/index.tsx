import { clx } from "@medusajs/ui";
import LocalizedClientLink from "@modules/common/components/localized-client-link";

type NavItemsProps = { className?: string };


const NavMenuItems = {
    Каталог: "#", // /store
    "О нас": "#", // /about
    Контакты: "#", // /contacts
}

export default function NavItems({ className }: NavItemsProps) {
    return (
        <ul className={clx("flex items-center gap-4", className)}>
            {Object.entries(NavMenuItems).map(([name, href]) => {
                return (
                    <li key={name}>
                        <LocalizedClientLink
                            href={href}
                            className="text-xl text-gray-800 hover:text-ui-fg-disabled"
                            data-testid={`${name.toLowerCase()}-link`}
                        >
                            {name}
                        </LocalizedClientLink>
                    </li>
                )
            })}
        </ul>
    )
};