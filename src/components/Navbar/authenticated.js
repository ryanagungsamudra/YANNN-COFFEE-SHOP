import DarkMode from "../utility/DarkMode";
import DropdownProfile from "./conditional-rendering/DropdownProfile";

// import Search from "../../assets/product/search.svg"

const Authenticated = () => {
    return (
        <div className="d-flex">
            {/* <div className="searchBox" style={{ marginRight: '-0.5rem' }}>
                <input type="text" placeholder="Search Anything You Want..." />
                <img src={Search} alt="searchBox" />
            </div> */}
            <div style={{ marginTop: '0.3rem', marginRight: '0.5rem' }}>
                <DarkMode />
            </div>
            <DropdownProfile />
        </div>
    );
};
export default Authenticated