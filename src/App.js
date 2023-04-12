import { useState } from "react";
import Card from "./components/Card";
import Expense from "./components/Expense";
import ExpenseForm from "./components/ExpenseForm";
import Filter from "./components/Filter";
import "./App2.css";
import ExpensesChart from "./components/ExpensesChart";
const App = () => {
  const [filter, setFilter] = useState("All");
  const initial_Value = [
    {
      id: "Ex1",
      title: "Taxi",
      amount: 203.4,
      date: new Date(2021, 2, 3),
    },
    {
      id: "Ex7",
      title: "Taxi",
      amount: 203.4,
      date: new Date(2021, 2, 3),
    },
    {
      id: "Ex2",
      title: "Shop rent",
      amount: 100.4,
      date: new Date(2020, 5, 3),
    },
    {
      id: "Ex3",
      title: "Electricity",
      amount: 20.8,
      date: new Date(2020, 7, 1),
    },
    {
      id: "Ex4",
      title: "Home rent",
      amount: 203.4,
      date: new Date(2021, 2, 9),
    },
    {
      id: "Ex5",
      title: "School rent",
      amount: 100.4,
      date: new Date(2022, 5, 3),
    },
    {
      id: "Ex6",
      title: "Car fuel",
      amount: 20.8,
      date: new Date(2022, 7, 1),
    },
  ];
  const [expense, setExpense] = useState(initial_Value);

  const onSaveEventHandler = (displayInput) => {
    setExpense((previousValue) => [...previousValue, displayInput]);
  };

  const onChangeFilterHandler = (selectedYear) => {
    return setFilter(selectedYear);
  };

  const useFilteredChange = expense.filter((expense) => {
    return expense.date.getFullYear().toString() === filter;
  });
  return (
    <>
      <ExpenseForm onSaveEventHandler={onSaveEventHandler} />
      <ExpensesChart expenses={useFilteredChange} />
      <Card className="container">
        <Filter selected={filter} onChangeFilter={onChangeFilterHandler} />
        {filter ==="All" && (
          expense.map((item) => {
            return (
              <Expense
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
              />
            );
          })
        )}
         {useFilteredChange.length !== 0 && useFilteredChange.map((item) => {
            return (
              <Expense
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
              />
            );
          })}

           {(useFilteredChange.length === 0 && filter !=="All" ) && (
          <h4 className="No__data__found">No Data Found!</h4>
        )}
      </Card>
    </>
  );
};

export default App;
