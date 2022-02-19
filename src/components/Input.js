import styled from 'styled-components'

const Input = styled.input.attrs(props => ({
    // we can define static props
    type: "text",
  
    // or we can define dynamic ones
    size: props.size || "1em",
  }))`
    color: linear-gradient(180deg,#4B91F7 0%,#367AF6 100%);
    font-size: 1em;
    border: 2px solid #4B91F7;
    border-radius: 3px;
  
    /* here we use the dynamically computed prop */
    margin: ${props => props.size};
    padding: ${props => props.size};
  `;

export default Input
