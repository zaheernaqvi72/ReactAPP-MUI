import { useState, useEffect } from 'react';
import { fetchQuotes } from '../services/quoteAPI';
import PostItem from './PostItem';
import { Container, CircularProgress, TextField, List, Typography, Box } from '@mui/material';

const PostList = () => {
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const quoteData = await fetchQuotes({});
                setQuotes(quoteData.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredQuotes = quotes.filter(quote => {
        const authorMatch = quote.quoteAuthor.toLowerCase().includes(searchTerm.toLowerCase());
        const textMatch = quote.quoteText.toLowerCase().includes(searchTerm.toLowerCase());
        return authorMatch || textMatch;
    });

    return (
        <Container>
            <Box textAlign="center" mb={3}>
                <Typography variant="h4" color="primary">Quotes</Typography>
            </Box>
            <TextField
                label="Search"
                variant="outlined"
                fullWidth
                margin="normal"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {loading ? (
                <CircularProgress />
            ) : (
                <List>
                    {filteredQuotes.length > 0 ? (
                        filteredQuotes.map(quote => (
                            <PostItem key={quote._id} quote={quote} />
                        ))
                    ) : (
                        <Typography variant="body2">No quotes found.</Typography>
                    )}
                </List>
            )}
        </Container>
    );
};

export default PostList;
