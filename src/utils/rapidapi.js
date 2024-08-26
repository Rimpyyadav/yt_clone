import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'youtube138.p.rapidapi.com',
    },
    timeout: 10000,
};

export const fetchData = async (url) => {
    try {
        console.log("API Key:", API_KEY);  // Add this line here
        console.log(`Using API Key: ${API_KEY}`);
        console.log(`Requesting URL: ${BASE_URL}/${url}`);

        const { data } = await axios.get(`${BASE_URL}/${url}`, options);
        return data;
    } catch (error) {
        console.error("Error fetching API data:", error.response || error.message);
        if (error.response) {
            console.error("Status:", error.response.status);
            console.error("Data:", error.response.data);
        }
        throw error;
    }
};