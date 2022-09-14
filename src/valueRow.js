import { useState } from 'react';


export default function ValueRow(props) {

    const {
        amount,
        onChangeAmount
    } = props

    const [inputAmount, setInputAmount] = useState(amount);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            console.log(parseInt(inputAmount))
        onChangeAmount(parseInt(inputAmount))
        }
    }

    const handleFromInputChange = (e) => {
        setInputAmount(e.target.value)
        }
    

    return (
        <div className='row-style'>
            <input
            type = "number"
            value={inputAmount}
            onKeyPress={handleKeyPress} 
            onChange={handleFromInputChange}
            />
        </div>
    )
}