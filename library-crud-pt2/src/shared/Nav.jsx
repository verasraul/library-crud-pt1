import {NavLink} from "react-router-dom"

export default function Nav(){

    return (
        <nav>
            <NavLink to="/">Book List</NavLink>
            {/* <NavLink to="/books">books</NavLink> */}
            <NavLink to="/create-book">Add to list</NavLink>
        </nav>
    )
}