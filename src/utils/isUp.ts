import axios from "axios";

const statusCodes = {
	isUp: 1,
	isDown: 2,
	invalidDomain: 3,
};

export default async function isUp(url: string) {
	const hostname = encodeURIComponent((new URL(url)).hostname)
	var resp = await axios.get(`https://isitup.org/${hostname}.json`)
    return resp.data.status_code === statusCodes.isUp
}