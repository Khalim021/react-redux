import React from 'react';

function Footer() {
    return (
        <div>
            <nav className="navbar navbar-light bg-secondary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="sff">
                        @Copyright {new Date().getFullYear()}
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default Footer;