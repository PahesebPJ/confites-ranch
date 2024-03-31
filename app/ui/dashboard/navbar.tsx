"use client"
import Image from "next/image"
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar(){

    const router = useRouter();

    async function onClose() {
        router.push('/dashboard');
    }
    async function onOk() {
        router.push('/dashboard');
    }

   return( 
        <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
            <nav className="flex items-center gap-6 text-lg font-medium md:gap-5 md:text-sm lg:gap-6">
                <a className="flex items-center gap-2 text-lg font-semibold md:text-base" href="#">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="w-6 h-6"
                    >
                    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                    <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
                    <path d="M12 3v6"></path>
                    </svg>
                    <span className="sr-only">Place Scheduler</span>
                </a>
            </nav>
            <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
                <form className="flex-1 ml-auto sm:flex-initial">
                    <div className="relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </svg>
                        <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                            placeholder="Search registrations..."
                            type="search"
                        />
                    </div>
                </form>
                <Link 
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full"
                    href="/dashboard?showSettings=y"
                >
                    <Image
                        alt="Avatar"
                        className="rounded-full hidden md:block"
                        height={32}
                        src="/username.png"
                        width={32}
                    />
                    <span className="sr-only">Toggle user menu</span>
                    
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  className="h-6 w-6 text-gray-500 dark:text-gray-400" data-id="15"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </div>
        </header>
    )
}