import { WarningIcon } from "@/assets/svg/Icons";

export default function Toast({ text }) {
    return (
        <div id="toast-warning" className="flex fixed top-5 right-5 items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 z-30" role="alert">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
                <WarningIcon className="w-5 h-5" />
                <span className="sr-only">Warning icon</span>
            </div>
            <div className="ml-3 text-sm font-normal">{text}</div>
        </div>
    )
}