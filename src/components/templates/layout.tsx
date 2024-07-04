import Link from "next/link";

const Layout = ({children}:{children:React.ReactNode}) => {
    return (
        <>
            <header>
                <div>
                    <Link href="/" className="bold">Joy's Story</Link>
                    <nav>
                        <ul>
                            <li>List</li>
                            <li>회고</li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout;