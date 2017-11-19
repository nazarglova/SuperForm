import React from "react";
import Button from './Button';

const UserInfo = (props) => {
	let {userInfo, handleClick} = props;
	let text = (Object.keys(userInfo).length > 0) && JSON.stringify(userInfo, null, '\t');
	return (
		<div>
			<div className="user-info">
				<pre>
					{text}
				</pre>
			</div>
			<Button
				value="Clear"
				onClick={handleClick}
				isDisabled={!text}
			/>
		</div>
	)
};
export default UserInfo;