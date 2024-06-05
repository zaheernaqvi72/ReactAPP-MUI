import PostList from './components/PostList';
import { Container, Typography } from '@mui/material';

const App = () => {
    return (
        <Container>
            <Typography variant="h4" component="h1" sx={{ marginTop: '16px' }}>
                Post List
            </Typography>
            <PostList />
        </Container>
    );
};

export default App;
