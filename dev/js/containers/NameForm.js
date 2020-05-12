import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {muffins} from "../actions/muffinAction";

//how do i access store here

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    var maxMuffins = 20; //i want to store this value in the store upon creation
    var integer = parseInt(this.state.value, 10);
    if(integer <= maxMuffins) {
        alert('A muffin was submitted: ' + this.state.value);
        maxMuffins -= this.state.value;
        this.props.muffins(integer)
    } else {
        alert("You are trying to buy " +  this.state.value + " when we only have " + maxMuffins + " available");
    }
    event.preventDefault();
    //console.log(this.state.value)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Muffins To Buy:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function mapStateToProps(state) {
    console.log(state.value)
    return {
        muffins: state.value
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({muffins: muffins}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(NameForm);