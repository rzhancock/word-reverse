import React, { Component } from 'react';
import './App.css';

export default class Reverse extends React.Component {
	constructor (props) {
	  super(props);
	  this.state = {
	    text: '',
	    reversed: ''
	  }
	  this.handleChange = this.handleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	}

	

	handleChange(e) {
		this.setState({ text: e.target.value });
	}

	handleSubmit(e) {
		let input = this.state.text;
		input = input.split(' ').map(x => x.split('').reverse().join('')).join(' ');
		this.setState({ reversed: input });

		e.preventDefault();
	}
		
	

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input 
					className='input' 
					type='text' 
					placeholder="Enter any word, phrase, or string" 
					
					onChange={this.handleChange} />

				<button type='submit'> Reverse </button>
			</form>
		)

			
		}
	}
