import { SITE } from "@lib/constants";
import { clx } from "@medusajs/ui";
import Link from "next/link";

type LogoLinkProps = {
    className?: string
}


export default function LogoLink({ className }: LogoLinkProps) {
    return (
        <Link href="/" className={clx("flex items-center gap-2", className)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 32 32"
            >
                <path
                    fill="#E85231"
                    d="M31.862 14.005c-.174-1.311-.566-2.593-.857-3.889h-.048c-4.696 3.839-9.652 7.68-14.349 11.516.173-.928.48-1.743.683-2.587.85-3.496-.788-7.007-3.85-8.324-3.378-1.452-7.567-.338-9.725 2.661-2.196 3.053-2.379 6.4-1.1 9.838 2.184 5.87 8.811 9.542 15.36 8.646 7.4-1.013 15.158-8.338 13.886-17.861z"
                ></path>
                <path
                    fill="#E85231"
                    d="M7.986 8.98C13.8 7.29 19.647 5.715 25.48 4.09c.258-.071.515-.15.82-.242C22.35.011 14.46-1.697 7.945 2.238 2.292 5.654-1.489 14.048.567 18.804c.078-.633.116-1.17.209-1.698.74-4.2 3.16-6.95 7.21-8.126z"
                ></path>
            </svg>

            <span className="text-gray-800 font-semibold text-xl">{SITE.NAME}</span>
        </Link>
    )
}
