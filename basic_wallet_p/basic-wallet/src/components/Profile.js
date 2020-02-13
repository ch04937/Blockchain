import React, { useState, useEffect } from "react";
import { client } from "../utils/dy_axios";

// importing scss
import "../app.scss";

/*
******************************** TASK *************************************
* Allow the user to enter, save, or change the `id` used for the program  *
*                                                                         *
***************************************************************************

*/

const Profile = () => {
	const [id, setId] = useState([]);

	useEffect(() => {
		async function changeId() {
			const response = await client.get("/last_block");
			setId(response.data);
			console.log(response.data);
		}
		changeId();
	}, []);
	return (
		<div className="profile">
			<h3>Profile Border</h3>
			<p>ID: {}</p>
		</div>
	);
};

export default Profile;
