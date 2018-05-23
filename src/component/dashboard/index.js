import React from 'react';
import uuid from 'uuid';
import ExpenseForm from './../expense-form/';
import autoBind from '../../utils';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: [],
      error: null,
    };
    autoBind.call(this, Dashboard);// this enables all my handle methods to be bound automatically-- looking for the 'handle' then automatically binding the
  }
  // remember expense will be passed in via the previous function expense-form, so see expense-form index.js file here we are adding two new properties to our expense form--- .createdOn and .id are now two dynamically created properties! OMG so confusing
  // expense is the state of the expense-form component, dashboard is direct parent of expense-form
  // so here we are checking to make sure we got what we needed from the expense state we pass in
  handleAddExpense(expense) {
    if (expense.title === '') {
      return this.setState({ error: true });
    }
    expense.createdOn = new Date();
    expense.id = uuid();
    // when we pass the previousState in, it allows us to add to the previous state-- so say previous state was 1, we can now add new input to it-- REACT is immutable so we make copies, not .push, see the spread oprtr
    // here prefivious state is the previous state of the expense-form child which we pass in
    return this.setState((previousState) => {
      return {
        expenses: [...previousState.expenses, expense], 
        error: null, // spread operater will create a copy of previous array and adding the new expense and return the new array-- like an immutable version of  push
        // expenses holds objecst representing the new state of our expense-form component
      };
    });
  }
  handleTotalPrice() {
    return this.state.expenses.reduce((sum, expense) => {
      return sum + Number(expense.price);
    }, 0);
  }

  // here we map over the array of stored state objects from the expense p=form inputs and return a list
  handleExpensesList() {
    return (
      <ul>
        {
          this.state.expenses.map((expense) => {
            return (
              <li key={expense.id}>
              {expense.title}: ${expense.price}
            </li>
            );
          })
        }
      </ul>
    );
  }
  // adding classname not necc just good practice
  // note we are adding a prop handleAddExpense to ExpenseForm, this funciton is defined here and passed tp the placeholder in expenseform
  // REACT encourages one way data flow-- top down, parent to child, parent to child
  // judy likes to space these more to help highlight the child component
  // line 66 is saying if this thing to the left is true, then do this thing to right
  // note that the $'s here are just for the semantics of the rendered html page just essentially adding the string dollar sign to a string ie $1.00

  render() {
    return (
    <section className="dashboard">
    <h1>Budget Tracker Dashboard</h1>
    <ExpenseForm handleAddExpense={this.handleAddExpense}/>
    { this.state.error && <h2 className="error">You must enter a title.</h2> }
    { this.handleExpensesList() }
    <p> Your total costs are: ${ this.handleTotalPrice() }</p>
    </section>
    );
  }
}
