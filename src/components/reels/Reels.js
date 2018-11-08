import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateReels} from '../../actions/ReelActions';
import Reel from '../reel/Reel';
import './Reels.css';

class Reels extends Component {
	render() {
		var reels = this.props.reels.map((reel) => {
			return <Reel key={reel.id} symbols={reel.symbols}></Reel>
		});

		return (
			<div className="reels">
				{reels}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return state;
}

const mapDispatchToProps = function (dispatch) {
	return bindActionCreators({
		updateReels
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Reels);
