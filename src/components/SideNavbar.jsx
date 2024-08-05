import { NavLink } from 'react-router-dom';

const SideNavbar = () => {
    const texto="teste";
    return (
        <div className="relative flex flex-col bg-red-500 z-20">
            <nav className="lat-nav"></nav>
                <div className={`lat-nav-item ${texto}`}></div>
                    <NavLink to="#top" className="lat-nav-link my-4" activeClassName="active"></NavLink>
                    <span className="px-2 ml-2 rounded-lg cursor-default select-none lat-nav-label text-blue bg-sidebar">INÍCIO</span>
                </div>
                <div className="lat-nav-item">
                    <NavLink to="#activities" className="lat-nav-link my-4" activeClassName="active"></NavLink>
                    <span className="px-2 ml-2 rounded-lg cursor-default select-none lat-nav-label text-blue bg-sidebar">ATIVIDADES</span>
                </div>
                <div className="lat-nav-item">
                    <NavLink to="#team" className="lat-nav-link my-4" activeClassName="active"></NavLink>
                    <span className="px-2 ml-2 rounded-lg cursor-default select-none lat-nav-label text-blue bg-sidebar">EQUIPA</span>
                </div>
            </nav>
        </div>
    );
};

export default SideNavbar;
