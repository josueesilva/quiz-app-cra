import {
    CHANGE_USER,
    CHANGE_SCORE,
} from './actionsTypes'

export const handleScoreChange = (payload) => ({
    type: CHANGE_SCORE,
    payload,
})

export const handleUserChange = (payload) => ({
    type: CHANGE_USER,
    payload,
})
