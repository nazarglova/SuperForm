import React from 'react';
import GenerateInput from './GenerateInput';

const renderInput = (props) => {
	let {type = 'text', name, placeholder} = props;
	return (<GenerateInput
		type={type}
		name={name}
		placeholder={placeholder}
	/>);
};
export default renderInput;