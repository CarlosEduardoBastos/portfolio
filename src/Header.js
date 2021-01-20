import React from 'react'

const Header = () => {
    return (
        <header className="header-color">
            <section>
                <a href="/" className="logo">logo</a>
                    <ul>
                        <li><a href="/">home</a></li>
                        <li><a href="/">sobre</a></li>
                        <li><a href="/">informação</a></li>
                    </ul>
            </section>
        </header>
    )
}

export default Header
