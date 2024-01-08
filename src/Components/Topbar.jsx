import React from "react";
import { Link } from "react-router-dom";
export const API_URL = "https://659b9bcad565feee2dab4dc5.mockapi.io/blogs"

function Topbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container px-5">
                    <Link className="navbar-brand" to ="/">CRUD APP</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/create">Create</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
                       
                            
                        </ul>
                    </div>
                </div>
            </nav>
    </>
  );
}

export default Topbar;
