import { useState } from "react";
import "./Expense.css"
import Card from "./Card"
function Expense(props){
    const [title,setTitle] = useState(props.title);
    const month = props.date.toLocaleString('en-US',{month: 'long'});
    const day = props.date.toLocaleString('en-US',{day: '2-digit'});
    const year = props.date.getFullYear(); 
    return (
        <Card className="First__Div">
            <div className="Fourth__Div">
                <div className="Date__month__year">{month} {year}</div>
                <div className="Date__day">{day}</div>   
            </div>
            <h3>{title}</h3>
                <div className="Third__Div">$ {props.amount}</div>
        </Card>
    )
}

export default Expense;