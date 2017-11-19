import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SuperForm from './SuperForm';
import UserInfo from './UserInfo';

class SuperFormApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo: {}
		};
	};

	handleSubmit = (event) => {
		event.preventDefault();
		let target = event.target;
		let elements = target.elements;
		let elementsLenght = elements.length;
		let userInfo = this.state.userInfo;

		for (let i = 0; i < elementsLenght; i++) {
			if (elements[i].type !== "submit") {
				userInfo[elements[i].name] = elements[i].value;
			}
		}
		this.setState(userInfo);
		target.reset();
	};
	clearUserInfo = () => {
		this.setState({userInfo: {}});
	};

	render() {
		return (
			<div className="form-app">
				<div className="form-box">
					<h1>Super Form</h1>
					<SuperForm
						handleSubmit={this.handleSubmit}
					/>
				</div>
				<div className="resault-box">
					<h1>Result</h1>
					<UserInfo
						userInfo={this.state.userInfo}
						handleClick={this.clearUserInfo}
					/>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<SuperFormApp />,
	document.getElementById('root')
);