import React, { Component } from 'react';
import './App.css';

export default class Reverse extends React.Component {
	constructor(props) {
   		super(props);
    	this.state = {text: ''};

    	handleReverse = () => {
    		
    	}
  	}

	render() {
		return (
			<div className='wr-container'>
				<input className='input' type='text' placeHolder="Enter any word, phrase, or string" />
				
				<button type='button' onClick={handleReverse}>
					Reverse
				</button>
			</div>
		);
	}
}