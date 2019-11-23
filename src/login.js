import React from 'react';

const LoginPage = (props) => {
	const [usia, setUsia] = React.useState(1);

	const onClicked = () => {
		setUsia(usia+1);

		console.log("sudah diklisk");
	}
	console.log(props);

	return <div>
	<div>Hello Bojonegoro Linux User!</div>
	<div>Salam kenal :) perkenalkan nama saya <button onClick={onClicked}>fendy</button></div>
	</div>
}

export default LoginPage;