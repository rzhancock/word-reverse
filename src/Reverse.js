import React, { Component } from 'react';
import './App.css';

export default class Reverse extends React.Component {
	constructor (props) {
	  super(props);
	  this.state = {
	    text: ''
	  }
	  this.handleChange = this.handleChange.bind(this);
	}



	handleChange = function(e) {
		let input = e.target.value;
		this.setState({

				text:  input
		});

		console.log(this.state.text);

	}

	render() {
		return (
			<form onSubmit={(e) => this.handleChange(e)}>
				<input className='input' type='text' placeholder="Enter any word, phrase, or string" />
				
				<button type='button' onClick={(e) => this.handleChange(e)}>
					Reverse
				</button>
			</form>
		)

			
		}
	}
