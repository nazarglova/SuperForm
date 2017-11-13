import React from "react";
import renderInput from './renderInput';
import renderButton from './renderButton';

export default class SuperForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo: {
				name: null,
				surName: null,
				aboutMe: null
			},
			isDisabled: true,
		};
	};
	handleChange = (event) => {
		let inputName = event.target.name;
		let inputValue = event.target.value;

		let state = Object.assign({}, this.state);

		let userInfo = state.userInfo;

		userInfo[inputName] = inputValue;
		let isUserInfoFull = !this.isFullIn(userInfo);
		state.isDisabled = isUserInfoFull;
		this.setState(state);
	};
	hendlerReset = () => {
		let state = Object.assign({}, this.state);
		let userInfo = state.userInfo;
		for (let key in userInfo) {
			userInfo[key] = null;
		}
		state.isDisabled = true;
		this.setState(state);
	};
	isFullIn(object) {
		for (let key in object) {
			if (object[key] === null || object[key] === "") return false;
		}
		return true;
	};
	render() {
		return (
			<form onSubmit={this.props.hendlerSubmit} onChange={this.handleChange}
				  onReset={this.hendlerReset}>

				{renderInput({
					name: 'name',
					placeholder: 'Your Name'
				})}
				{renderInput({
					name: 'surName',
					placeholder: 'Surname'
				})}
				{renderInput({
					type: 'textarea',
					name: 'aboutMe',
					placeholder: 'About Me'
				})}
				{renderButton({
					type: 'submit',
					value: 'Save',
					isDisabled: this.state.isDisabled
				})}
			</form>);
	}
}