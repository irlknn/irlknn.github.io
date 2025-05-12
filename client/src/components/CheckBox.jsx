import { Checkbox } from 'antd';
import React, { useState } from 'react';

const filters = [
    { id: 1, name: "Artificial Intelligence" },
    { id: 2, name: "Web Development" },
    { id: 3, name: "Blockchain" },
    { id: 4, name: "Databases" },
    { id: 5, name: "Gaming" }
];

function CheckBox({ handleFilter }) {
    const [isChecked, setIsChecked] = useState([]);

    const handleToggle = (value) => {
        const currentIndex = isChecked.indexOf(value);
        const newChecked = [...isChecked];
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setIsChecked(newChecked);
        handleFilter(newChecked.map((id) => filters.find((filter) => filter.id === id).name));
    };

    return (
        <>
            {filters.map((value) => (
                <React.Fragment key={value.id} >
                    <div className='filters-container'>

                        <Checkbox
                            onChange={() => handleToggle(value.id)}
                            checked={isChecked.includes(value.id)}
                        >
                            <span className='filters-theme'>{value.name}</span>
                        </Checkbox>
                    </div>
                </React.Fragment>
            ))}
        </>
    );
}

export default CheckBox;
