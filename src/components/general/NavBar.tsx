import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <nav className="bg-shamrock-600 text-white flex justify-between p-5 mb-5">
                <Link className="" to='/'>Inicio</Link>
                <ul className="flex gap-5">
                    <li>
                        <Link to='/users'>Usarios</Link>
                    </li>
                    <li>
                        <Link to='/about'>Acerca de</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contacto</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default Navigation;
