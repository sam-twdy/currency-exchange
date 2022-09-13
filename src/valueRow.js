


export default function ValueRow(props) {

    const {
        amount,
        onChangeAmount
    } = props

    return (
        <div className='row-style'>
            <input type = "number" value={amount} onChange={onChangeAmount}/>
        </div>
    )
}