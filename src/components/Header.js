import styled from  'styled-components'

const Header = styled.h2`
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-weight: bold;
    text-align: ${props => props.textAlign ? props.textAlign : 'center' }
`
export default Header
