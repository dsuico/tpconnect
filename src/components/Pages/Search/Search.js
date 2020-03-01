import React from 'react';
import TextField from '@material-ui/core/TextField';
import './Search.css';
import {connect} from 'react-redux';
class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      console.log()
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="main-content">
            <span>Search Flight</span>
            <form onSubmit={this.handleSubmit}>
                <TextField id="" label="Departure Airport" style={{width:"35%"}}/>
                <TextField id="" label="Arrival Airport" style={{width:"35%"}}/>
                <TextField
                    id="date"
                    label="Departure Date"
                    type="date"
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <TextField
                    id="date"
                    label="Return Date"
                    type="date"
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
            </form>
        </div>
      );
    }
  }
  
export default Search;