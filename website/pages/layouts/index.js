import Navigation from "../modules/Navigation"

export default function Layout({ children }) {
    return (
        <main className="content-wrapper column j-center">
            <Navigation />
            {children}
        </main>
    )
}

export function HomepageLayout({ children }) {
    return (
        <main className="content-wrapper column j-center">
            <Navigation />
            {children}
        </main>
    )
}