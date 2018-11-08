import React, {Component} from 'react';
import './SpinButton.css';

class SpinButton extends Component {
	render() {
		return (
			<button className="spin-button" onClick={this.props.onClick}>
				Spin
			</button>
		);
	}
}

export default SpinButton;
