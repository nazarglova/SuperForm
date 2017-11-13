import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SuperForm from './SuperForm';
import UserInfo from './UserInfo';

class SuperFormApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo: {},
			isDisabled: true,
		};
	};

	hendlerSubmit = (event) => {
		event.preventDefault();
		let target = event.target;
		let elements = target.elements;
		let elementsLenght = elements.length;

		let state = Object.assign({}, this.state);
		let userInfo = state.userInfo;

		for (let i = 0; i < elementsLenght; i++) {
			if (elements[i].type !== "submit") {
				userInfo[elements[i].name] = elements[i].value;
			}
		}
		state.isDisabled = false;
		this.setState(state);
		target.reset();
	};
	hendlerClick = () => {
		let state = Object.assign({}, this.state);
		state.userInfo = {};
		state.isDisabled = true;
		this.setState(state);
	};

	render() {
		return (
			<div className="form-app">
				<div className="form-box">
					<h1>Super Form</h1>
					<SuperForm
						hendlerSubmit={this.hendlerSubmit}
					/>
				</div>
				<div className="resault-box">
					<h1>Result</h1>
					<UserInfo
						userInfo={this.state.userInfo}
						isDisabled={this.state.isDisabled}
						onClick={this.hendlerClick}
					/>
				</div>
			</div>
		);
	}
}


// ========================================

ReactDOM.render(
	<SuperFormApp />,
	document.getElementById('root')
);