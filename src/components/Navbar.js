import { FlightyLogo } from '@/assets/svg/Icons'

export default function Navbar() {
    return (
        <nav className="w-full absolute border-gray-200 bg-indigo-600 dark:bg-indigo-600 dark:border-gray-700 z-20">
            <div className="max-w-screen-xl flex flex-wrap justify-center items-center mx-auto p-4">
                <a href="/" className="flex items-center">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        <FlightyLogo className="w-32 h-16" />
                    </span>
                </a>
            </div>
        </nav>
    )
}