import './Filter.css'
const Filter = (props) => {

        const dropdownChangeHandler = (e) => {
          props.onChangeFilter(e.target.value);
        };
        

return(
    <div className='Filter__container'>
    <span className='Filter__span'>Filter by year</span>
        <select className="Filter__option" value={props.selected} onChange={dropdownChangeHandler}>
            <option>All</option>
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
        </select>
    </div>
)
}
export default Filter