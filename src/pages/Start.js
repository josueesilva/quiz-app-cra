
import Button from '../components/Button'
import Container from '../components/Container'
import { useNavigate } from 'react-router-dom'

const Start = () => {
    const navigate = useNavigate()
    
    const handleSubmit = e => {
        e.preventDefault();
        navigate('/questions')
    }

    return (
        <form onSubmit={handleSubmit}>
            <Container mt={3} width="100%">
                <Button fullWidth variant="contained" type="submit">
                    Get Started
                </Button>
            </Container>
        </form>
    );
}
 
export default Start;