import React from "react";
import GenerateButton from './GenerateButton';

const renderButton = (props) => {
	let {type, value, isDisabled, onClick} = props;
	return (<GenerateButton
		type={type}
		value={value}
		isDisabled={isDisabled}
		onClick={onClick}
	/>);
};
export default renderButton;