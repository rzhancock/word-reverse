import React, { Component } from 'react';
import './App.css';

export default class Reverse extends React.Component {
	constructor (props) {
	  super(props);
	  this.state = {
	    text: '',
	  }
	  this.handleChange = this.handleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	}

	

	handleChange(e) {
		this.setState({ text: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		
		let input = this.state.text;
		let reversed = input.split(' ').map(x => x.split('').reverse().join('')).join(' ');
		this.setState({ text: reversed });
		console.log(this.state.text)
		

	}
		
	

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input 
					className='input' 
					type='text' 
					placeholder="Enter any word, phrase, or string" 
					value={this.state.text}
					onChange={this.handleChange} />

				<button type='submit'> Reverse </button>
			</form>
		)

			
		}
	}
