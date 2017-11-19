import React from "react";
const Button = (props) => {
	return (
		<button type={props.type} disabled={props.isDisabled} onClick={props.onClick}>{props.value}</button>
	);
};
export default Button;