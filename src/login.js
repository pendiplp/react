import React from 'react';

const LoginPage = (props) => {
	const [usia, setUsia] = React.useState(1);

	const onClicked = () => {
		setUsia(usia+1);

		console.log("sudah diklisk");
	}
	console.log(props);

	return <div>
	<div>nama saya: {props.name}</div>
	<div>usia saya {usia}</div>
	<button onClick={onClicked}>KLIK</button>
	</div>
}

export default LoginPage;