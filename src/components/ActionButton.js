const ActionButton = (props) => {
    
    return(
        <button 
        className="pr-6 action-btn hover:to-blue-900"
        style={{
            backgroundColor:props.bgColor,
            color:props.textColor
            }}>
            {props.text}
        </button>
    )
}

export default ActionButton