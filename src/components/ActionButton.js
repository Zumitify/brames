const ActionButton = (props) => {
    
    return(
        <button 
        className="pr-6 action-btn"
        style={{
            backgroundColor:props.bgColor,
            color:props.textColor
            }}>
            {props.text}
        </button>
    )
}

export default ActionButton