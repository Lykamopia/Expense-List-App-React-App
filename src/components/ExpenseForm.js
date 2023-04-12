import { useState } from "react"
import "./ExpenseForm.css"
const ExpenseForm = (props) => {
    const [eventTitle,setEventTitle] = useState('');
    const [eventDate,setEventDate] = useState('');
    const [eventAmount,setEventAmount] = useState('');

    const titleEventHandler = (e) =>{
        setEventTitle(e.target.value);
    };
    const dateEventHandler = (e) =>{
        setEventDate(e.target.value);
    };
    const amountEventHandler = (e) =>{
        setEventAmount(e.target.value);
    }

    const submitHandler = (e) =>{
        e.preventDefault();

        const displayInput = {
            title:eventTitle,
            amount:eventAmount,
            date: new Date(eventDate)
        }
        props.onSaveEventHandler(displayInput);
        setEventAmount('');
        setEventDate('');
        setEventTitle('');
    }
return (
    <div className="Form__container">
    <form onSubmit={submitHandler}>
        <div className="Form__input">
            <label>Title</label>
            <input type="text" value={eventTitle} onChange={titleEventHandler} />
        </div>
        <div  className="Form__input"> 
            <label>Amount</label>
            <input type="number" value={eventAmount} min="0.01" step="0.01" onChange={amountEventHandler} />
        </div>
        <div  className="Form__input">
            <label>Date</label>
            <input type="date" value={eventDate} min="2010-4-5" max="2023-4-3" onChange={dateEventHandler} />
        </div>
        <button className="Form__button" type="submit">Add to the list</button>
    </form>
</div>
)
}
export default ExpenseForm