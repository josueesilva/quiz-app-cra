
import Header from '../components/Header'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import useAxios from '../hooks/useAxios'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { decode } from 'html-entities'
import {
    handleScoreChange
} from '../redux/actions'
import LabelField from '../components/LabelField'
import Container from '../components/Container'
const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
}
const Questions = () => {
    const {
        question_category,
        question_difficulty,
        question_type,
        amount_of_question,
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


    const handleClickAnswer = (e) => {
        const question = response.results[questionIndex];
        if (e.target.textContent === decode(question.correct_answer)) {
            dispatch(handleScoreChange(score + 1))
            setQuestionIndex(questionIndex + 1)
        }
        if (questionIndex + 1 < response.results.length) {
            setQuestionIndex(questionIndex + 1)
        } else {
            navigate('/score')
        }
    }
    
    return (
        <Container direction="column">
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
    );
}
 
export default Questions;