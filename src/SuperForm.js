import React from "react";
import Input from './Input';
import Button from './Button';

export default class SuperForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo: {
				name: '',
				surName: '',
				aboutMe: ''
			},
			isDisabled: true,
		};
	};

	handleChange = (event) => {
		let inputName = event.target.name;
		let inputValue = event.target.value;
		let userInfo = this.state.userInfo;
		userInfo[inputName] = inputValue;
		let isUserInfoFull = !this.isFullIn(userInfo);
		this.setState({userInfo, isDisabled: isUserInfoFull});
	};
	handleReset = () => {
		let userInfo = this.state.userInfo;
		for (let key in userInfo) {
			userInfo[key] = "";
		}
		this.setState({userInfo, isDisabled: true});
	};

	isFullIn(obj) {
		for (let key in obj) {
			if (obj[key] === "") return false;
		}
		return true;
	};

	render() {
		return (
			<form onSubmit={this.props.handleSubmit}
				  onChange={this.handleChange}
				  onReset={this.handleReset}>
				<Input
					name="name"
					placeholder="Your Name"
				/>
				<Input
					name="surName"
					placeholder="Surname"
				/>
				<Input
					type="textarea"
					name="aboutMe"
					placeholder="About Me"
				/>
				<Button
					type="submit"
					value="Save"
					isDisabled={this.state.isDisabled}
				/>
			</form>);
	}
}