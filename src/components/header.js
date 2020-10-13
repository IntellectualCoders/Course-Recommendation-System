import React from 'react';

const Header = (props) => {
    
    return (
        <header>
            <nav className="navbar navbar-dark navbar-expand-md">
                <div className="container">
                    <a className="navbar-brand" href="#"><h1>Course Recommender Sytem</h1></a>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggler navbar-button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    
                            <ul className="navbar-nav ml-auto">
                            <li className="nav-pill auth">
                                <a className="nav-link" onClick={ props.handleScrollToRef } href="#">Login</a>
                            </li>
                        </ul>
                    </div> 
                
            </nav>
        </header>
        );
    }

export default Header;