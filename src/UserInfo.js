import React from "react";
import renderButton from './renderButton';

const UserInfo = (props) => {
	let {userInfo, isDisabled, onClick} = props;
	let text = (!isDisabled) && JSON.stringify(userInfo, null, '\t');
	return (
		<div>
			<div className="user-info">
				<pre>
					{text}
				</pre>
			</div>
			{renderButton({
				value: 'Clear',
				isDisabled: isDisabled,
				onClick: onClick
			})}
		</div>
	)
};
export default UserInfo;