import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'

const NavBar = () => {
    return(
        <nav>
            <Link to='/' >
                <h3>Virtus</h3>
            </Link>
            <div className="Categories">
                <NavLink to={'/category/Remeras'} className={({isActive}) => isActive ? 'ActiveOption' : 'option'}>Remeras</NavLink>
                <NavLink to={'/category/Pantalones'} className={({isActive}) => isActive ? 'ActiveOption' : 'option'}>Pantalones</NavLink>
                <NavLink to={'/category/Camperas'} className={({isActive}) => isActive ? 'ActiveOption' : 'option'}>Camperas</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;