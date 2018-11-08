import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as reelActions from '../../actions/ReelActions';
import TopBar from '../topbar/TopBar';
import Reels from '../reels/Reels';
import SpinButton from '../spinButton/SpinButton';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.onSpinButtonClick = this.onSpinButtonClick.bind(this);
	}

	onSpinButtonClick() {
		var spinTick = setInterval(() => {
			var fullReel = ['A', 'B', 'C', 'D', 'E'];
			var newReels = [];

			for (var i = 0; i < 3; i++) {
				var tmp = [];
				for (var j = 0; j < 3; j++) {
					var rand = fullReel[Math.floor(Math.random() * (fullReel.length - 1))];
					tmp.push(rand);
				}

				newReels.push(tmp);
			}

			this.props.actions.updateReels(newReels);
		}, 50);

		setTimeout(() => {
			clearInterval(spinTick);
		}, 1000);
	}

	render() {
		return (
			<div className="app">
				<TopBar></TopBar>
				<Reels></Reels>
				<SpinButton onClick={this.onSpinButtonClick}></SpinButton>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return state;
}

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(reelActions, dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
