import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Aquaphoton</h1>
            <div className="lists">
                <Link to="/">Home</Link>
                <Link to="/Display">Display</Link>
                {/*<Link to="/Upload" >Upload</Link>*/}
                <Link to="/Upload" >Upload</Link>
                <Link to="/Video">Video</Link>
                <Link to="/About" >About</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;