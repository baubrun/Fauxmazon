import React from 'react'
import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <aside className="sidebar">
            <h3>Categories</h3>
            <ul>
                <li>
                    <Link to="#" >Pants</Link>
                    <Link to="#" >Games</Link>
                </li>
            </ul>
        </aside>
    )
}

export default Categories
