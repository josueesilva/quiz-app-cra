import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import {
    handleCategoryChange,
    handleDifficultyChange,
    handleTypeChange,
} from '../redux/actions'

const SelectField = props => {
    const { label, options } = props
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const handleChange = (e) => {
        const value = e.target.value
        setValue(value)
        switch(label) {
            case 'Category': {
                dispatch(handleCategoryChange(value));
                break;
            }
            case 'Difficulty': {
                dispatch(handleDifficultyChange(value));
                break;
            }
            case 'Type': {
                dispatch(handleTypeChange(value));
                break;
            }
            default:
                return;
        }
    }

    return (
        <Box mt={3} width="100%" bgColor="red">
            <FormControl size="small" fullWidth>
                <InputLabel>{label}</InputLabel>
                <Select
                    value={value}
                    label={label}
                    onChange={handleChange}
                >
                    {options.map(({id, name}) => (
                        <MenuItem value={id} key={id}>{name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}
export default SelectField
