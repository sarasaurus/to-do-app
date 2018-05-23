import React from 'react';
import autoBind from './../../utils/'; // when a folder contains an index, no need type it, npm knows to look for index

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      value: 0,
    };
    autoBind.call(this, ExpenseForm);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.handleAddExpense(this.state);
  }
  handleChange(event) {
    const { name, value } = event.target; // events have these properties named as such already so can destructure
    // when we create form name, and value will map back to here-- just making it simple to purposefully link these [brackets] allow it to be dynamic?
    this.setState({
      [name]: [value], // this will be event.target.name
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
         <input
          type="text"
          name="title"
          placeholder="title"
          value={this.state.title}
          onChange={this.handleChange}/>

        <input
          type="text"
          name="price"
          placeholder="price"
          value={this.state.price}
          onChange={this.handleChange}/>
          <button type="submit">create expense</button>
      </form>
    );
  }
}
