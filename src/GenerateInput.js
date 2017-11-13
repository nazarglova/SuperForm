import React from "react";
const GenerateInput = (props)=> {
	switch (props.type) {
		case 'textarea':
			return (
				<textarea name={props.name} placeholder={props.placeholder}/>
			);
		default:
			return (
				<input type={props.type} name={props.name} placeholder={props.placeholder}/>
			);
	}
};
export default GenerateInput;