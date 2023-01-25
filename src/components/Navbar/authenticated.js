import DarkMode from "../utility/DarkMode";
import DropdownProfile from "./conditional-rendering/DropdownProfile";

const Authenticated = () => {
    return (
        <div className="d-flex">
            <div style={{ marginTop: '0.3rem', marginRight: '0.5rem' }}>
                <DarkMode />
            </div>
            <DropdownProfile />
        </div>
    );
};
export default Authenticated