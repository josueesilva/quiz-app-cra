
import Header from '../components/Header'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import useAxios from '../hooks/useAxios'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { decode } from 'html-entities'
import {
    handleScoreChange,
    handleUserChange
} from '../redux/actions'
import LabelField from '../components/LabelField'
import Container from '../components/Container'
import { Modal } from '../components/Modal'
const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
}
const Questions = () => {    
    const [showModal, setShowModal] = useState(false)
    const openModal =  () => {
        setShowModal(prev => !prev)
    }
    const {
        user_name,
        score
    } = useSelector(state => state);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    let apiUrl = 'api.php?amount=10&category=9&difficulty=easy&type=multiple'

    const { response, loading }  = useAxios({ url: apiUrl })
    const [questionIndex, setQuestionIndex]  = useState(0)
    const [options, setOptions] = useState([])

    useEffect(() => {
        if(response?.results.length) {
            const question = response.results[questionIndex];
            let answers = [...question.incorrect_answers];
            answers.splice(
                getRandomInt(question.incorrect_answers.length),
                0,
                question.correct_answer
            );
            setOptions(answers);
        }
    }, [response, questionIndex])

    

    if(loading){
        return (
            <Container>Loading...</Container>
        )
    }

    const handleClickRestart = () => {
        dispatch(handleUserChange(''))
        navigate('/')
    }

    const handleClickContinue = () => {
        setShowModal(false);
        next();
    }

    const next = () => {
        if (questionIndex + 1 < response.results.length) {
            setQuestionIndex(questionIndex + 1)
        } else {
            navigate('/score')
        }
    }

    const handleClickAnswer = (e) => {
        const question = response.results[questionIndex];
        if (e.target.textContent === decode(question.correct_answer)) {
            dispatch(handleScoreChange(score + 1))
            next();
        }
        else{
            openModal()
        }
    }
    
    return (
        <>
        <Container direction="column">
            <Container direction="column" >
                Good luck {user_name ? user_name :  'no name'}
            </Container>
            <Container direction="column">
                <Header>Question {questionIndex + 1}</ Header>
                <LabelField>
                    {decode(response.results[questionIndex].question)}
                </LabelField>
            </Container>        
               
            <Container direction="column">            
                <Container  direction="column">
                    {options.map((a, id) => (
                        <Container key={id}>
                            <Button
                                onClick={handleClickAnswer}
                                variant="contained"
                            >
                                {decode(a)}
                            </Button>
                        </Container>
                    ))}
                </Container>
                <Container>
                    Score: {score} / 10
                </Container>
            </Container>            
        </Container>
        <Modal showModal={showModal} setShowModal={setShowModal}>
            Wrong answer!
            Do you wanna continue?
            <Container>
                <Button onClick={handleClickRestart}>
                    Restart
                </Button>
                
                <Button onClick={handleClickContinue}>
                    Continue        
                </Button>
            </Container>
        </Modal>
        </>
    );
}
 
export default Questions;