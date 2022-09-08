import React, { useState, useEffect } from "react";
import withClickOutside from "./withClickOutside";

const SelectComponent = React.forwardRef ( ({
    options,
    placeholder = "",
    onChange,
    selectedKey,
    open,
    setOpen
}, ref) => {

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (selectedKey) {
          setInputValue(options.find((o) => o.key === selectedKey).value);
        }
      }, [selectedKey, options]);

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onItemSelected = (option) => {
        onChange !== undefined && onChange(options.key);
        onChange !== undefined && setInputValue(option.value);
        setOpen(false);
    }

    const onInputClick = () => {
        setOpen((prevValue) => !prevValue);
    };

    return <div className='dropdown-container' ref={ref}>
        <div className='input-container' onClick={onInputClick}>
            <input
            type = 'text'
            value = {inputValue}
            placeholder={placeholder}
            onChange={onInputChange}
            />
        </div>
        <div className={`dropdown ${open ? 'visible' : ''}`}>
            {options.map(opt=>{
                return (
                <div key={opt.key} onClick={() => onItemSelected(opt)} className="option">
                    {opt.value}
                </div>
            );
            })}
        </div>
    </div>
    }
);

export default withClickOutside(SelectComponent);