import React from 'react'
import { Link } from 'react-router-dom'

const NavBarMenu = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><b>Mobile Gallary</b></Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/addProduct">Add Products</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBarMenu ;