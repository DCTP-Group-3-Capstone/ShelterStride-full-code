import React, { useState } from 'react'
import "../sass/Components/DropdownSelect.scss"
import dropdown from "../assets/icon/Dropdown.svg"
import dropup from "../assets/icon/Drop up.svg"

const DropdownSelect = ({ options, defaultSelected, onSelect }) => {
    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState(defaultSelected || "Select");


    const handleToggleDropdown = () => {
        setIsActive(!isActive);
    };

    const handleOptionClick = (option) => {
        setSelected(option);
        setIsActive(false);

        if (onSelect) {
            onSelect(option);
        }
    };

    return (
        <div className="dropdown_select">
            <div className="dropdown_select-btn" onClick={handleToggleDropdown}>
                {selected}
                {isActive ? <img src={dropup} alt="dropup" /> : <img src={dropdown} alt="dropdown" />}
            </div>
            <div className="dropdown_select-content" style={{ display: isActive ? "block" : "none" }}>
                {options.map((option) => (
                    <div key={option} className="item" onClick={() => handleOptionClick(option)}>
                        {option}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DropdownSelect