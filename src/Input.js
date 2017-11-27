import React, { Component } from 'react';
import './App.css';

export default class Input extends React.Component {
	render() {
		return (
			<div className='wr-container'>
				<input className='input' type='text' defaultValue="Enter any word, phrase, or string" />
				<button type='button'>Reverse</button>
			</div>
		);
	}
}