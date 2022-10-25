import React, { useState } from "react"

import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"
import "./Expenses.css"

const Expenses = props => {
  const [filteredYear, setFilterdYear] = useState("2022")

  const filterChangeHandler = selectedYear => {
    // console.log("Expenses.js")
    // console.log(selectedYear)
    setFilterdYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses
