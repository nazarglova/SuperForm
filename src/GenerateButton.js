import React from "react";
const GenerateButton = (props) => {
	return (
		<button type={props.type} disabled={props.isDisabled} onClick={props.onClick}>{props.value}</button>
	);
};
export default GenerateButton;