import { Link, Outlet } from "react-router-dom";
import '../../index.css';

const Navigation = () => {
    return (
        <>
            <nav className="bg-shamrock-600 text-white flex flex-col items-center justify-center w-[100%]
            p-5 mb-5">
                <Link className="nav-items" to='/'>Inicio</Link>
                <ul className="flex flex-col items-center justify-center w-full">
                    <li className="nav-items">
                        <Link to='/users'>Usarios</Link>
                    </li>
                    <li className="nav-items">
                        <Link to='/about'>Acerca de</Link>
                    </li>
                    <li className="nav-items">
                        <Link to='/products'>Productos</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default Navigation;
