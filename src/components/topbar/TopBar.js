import React, {Component} from 'react';
import './TopBar.css';

class TopBar extends Component {
	render() {
		return (
			<div className="top-bar">
				<h2>React + Redux Slots</h2>
				<p>Balance: - Win: - Bet: 100</p>
			</div>
		);
	}
}

export default TopBar;
