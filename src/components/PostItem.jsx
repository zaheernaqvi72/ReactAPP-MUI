import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from '@mui/material';

const PostItem = ({ quote }) => {
    return (
        <Card variant="outlined" sx={{ margin: '16px 0' }}>
            <CardContent>
                <Typography variant="h6" component="div">
                    {quote.quoteText}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    - {quote.quoteAuthor}
                </Typography>
            </CardContent>
        </Card>
    );
};

PostItem.propTypes = {
    quote: PropTypes.shape({
        quoteText: PropTypes.string.isRequired,
        quoteAuthor: PropTypes.string.isRequired
    }).isRequired
};

export default PostItem;
