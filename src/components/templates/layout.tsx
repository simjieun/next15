import Link from "next/link";

const Layout = ({children}:{children:React.ReactNode}) => {
    return (
        <>
            <header className="p(6)">
                <div className="hbox gap(20)">
                    <Link href="/" className="bold">Joy's Story</Link>
                    <nav>
                        <ul className="hbox gap(20)">
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