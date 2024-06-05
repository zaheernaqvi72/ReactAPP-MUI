import axios from 'axios';

const BASE_URL = 'https://quote-garden.onrender.com/api/v3';

export const fetchRandomQuote = async ({ author, genre, count }) => {
    try {
        const response = await axios.get(`${BASE_URL}/quotes/random`, {
            params: { author, genre, count }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching random quote:', error);
        throw error;
    }
};

export const fetchQuotes = async ({ author, genre, query, page, limit }) => {
    try {
        const response = await axios.get(`${BASE_URL}/quotes`, {
            params: { author, genre, query, page, limit }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching quotes:', error);
        throw error;
    }
};

export const fetchGenres = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/genres`);
        const filteredGenres = response.data.filter(genre => genre);
        return filteredGenres;
    } catch (error) {
        console.error('Error fetching genres:', error);
        throw error;
    }
};

export const fetchAuthors = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/authors`);
        return response.data;
    } catch (error) {
        console.error('Error fetching authors:', error);
        throw error;
    }
};
