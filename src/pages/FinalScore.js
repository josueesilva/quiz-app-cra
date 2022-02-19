import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleScoreChange } from '../redux/actions';
import Header from '../components/Header';
import Button from '../components/Button';
import Container from '../components/Container';

const FinalScore = () => {
    const {score } = useSelector(state => state)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleBackSettings = () => {
        dispatch(handleScoreChange(0))
        navigate('/')
    }
    return (
        <Container direction="column">
            <Container>
                <Header>
                    Final Socre {score}
                </Header>
            </Container>
            <Container>
                <Button
                    variant="outlined"
                    onClick={handleBackSettings}
                >
                    Back to the start!
                </Button>
            </Container>
        </Container>
    );
}
 
export default FinalScore;