import { useState, useRef, useEffect } from "react";

const SelectComponent = ({
    options,
    placeholder = "",
    onChange,
    selectedKey,
    open,
    setOpen
}) => {

    const [inputValue, setInputValue] = useState('');

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

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
    }, [])

    const refOne = useRef(null)

    const handleClickOutside = (e) => {
        if(!refOne.current.contains(e.target)) {
            console.log('click')
            //change so click only fires if dropdown is open
            setOpen(false);
        } 
    }

    return <div className='dropdown-container' ref={refOne}>
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
};

export default SelectComponent;