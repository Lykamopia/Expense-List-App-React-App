import "./Card.css";
function card(props){
    const classes = 'card '+ props.className;
    return (
        <div className={classes}>{props.children}</div>
    )
}
export default card;