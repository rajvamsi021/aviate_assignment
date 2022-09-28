import React from 'react';
import {Link} from 'react-router-dom';


const NavBar = () => {

    const navItems = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Track Application',
            path: '/application-status'
        },
        {
            name: "FAQ's",
            path: '/faq'
        },
    ]

  return (
    /**
      * Bootstrap NavBar
      * https://getbootstrap.com/docs/5.0/components/navbar/
    */
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
            <div className="container-fluid">
                <Link className="navbar-brand ms-4" to="/">Aviate</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                        {navItems.map((item, index) => (
                            <li className="nav-item me-3" key={index}>
                                <Link className="nav-link" to={item.path}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default NavBar