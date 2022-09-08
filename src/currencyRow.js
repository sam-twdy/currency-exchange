import { useState } from 'react';
import SelectComponent from "./SelectComponent";

const options = [
    { key: 1, value: "test 1"},
    { key: 2, value: "test 2"},
    { key: 3, value: "test 3"},
    { key: 4, value: "test 4"}
];

export default function CurrencyRow(props) {
    const [selectedOption, setSelectedOption] = useState("");
    const [open, setOpen] = useState(false);

    return (
        <div className='row-style'>
            <SelectComponent
                options={options}
                onChange={(item) => setSelectedOption(item)}
                selectedKey={setSelectedOption}
                placeholder={"type to search"}
                open={open}
                setOpen={setOpen}
            />
            <p>selectedOption: {setSelectedOption}</p>
        </div>
    )
}