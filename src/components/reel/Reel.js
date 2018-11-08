import React, {Component} from 'react';
import Cell from '../cell/Cell';
import './Reel.css';

class Reel extends Component {
	render() {
		var symbols = this.props.symbols.map((symbol, idx) => {
			return <Cell key={idx} symbol={symbol}></Cell>
		});

		return (
			<div className="reel">{symbols}</div>
		);
	}
}

export default Reel;
