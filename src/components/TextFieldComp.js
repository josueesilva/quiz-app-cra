import { TextField } from "@mui/material";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/system';
import {
    handleAmountChange
} from '../redux/actions';
import { useEffect, useState } from "react";

const TextFieldComp = () => {
    const dispatch = useDispatch();
    const { amount_of_question } = useSelector(state => state);
    const [value, setValue] = useState('');
    useEffect(() => {
        setValue(amount_of_question ?? '')
    }, [amount_of_question])
    const handleChange = (e) => {
        const value = e.target.value;
        setValue(value);
        dispatch(handleAmountChange(value));     
    }

    return (
        <Box mt={3} width="100%">
            <FormControl>
                <TextField
                    onChange={handleChange}
                    variant="outlined"
                    label="Amount of Questions"
                    type="number"
                    size="small"
                    value={value}
                >

                </TextField>
            </FormControl>
        </Box>
    );
}
 
export default TextFieldComp;