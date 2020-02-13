import axios from "axios";

const dev = "http://localhost:5000/";

export const client = axios.create({
	baseURL: dev,
	headers: {
		"Content-Type": "application/json",
	},
});
