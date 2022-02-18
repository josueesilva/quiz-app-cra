import { Typography, Button } from '@mui/material';
import {Box} from '@mui/system'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleAmountChange, handleScoreChange } from '../redux/actions';

const FinalScore = () => {
    const {score } = useSelector(state => state)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleBackSettings = () => {
        dispatch(handleScoreChange(0))
        dispatch(handleAmountChange(0))
        navigate('/')
    }
    return (
        <Box mt={30}>
            <Typography
                variant="h3"
                fontWeight="bold"
                mb={3}
            >
                Final Socre {score}
            </Typography>
            <Button
                variant="outlined"
                onClick={handleBackSettings}
            >
                Back to settings!
            </Button>
        </Box>
    );
}
 
export default FinalScore;