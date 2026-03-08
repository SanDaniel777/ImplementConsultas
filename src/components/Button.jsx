function Button(props){

    return(
        <>
        <button className={props.type === "primary" ? "button-primary":"button-secondary"}
        onClick={props.action
            ? props.action : ()=>alert('Wihoo')

        }>
            <p>{props.text || 'Que rollo'}</p>
        </button>
        </>
    )
}
export default Button;