import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: ${props => props.direction ? props.direction : 'row' };
    justify-content: ${props => props.justify ? props.justify : 'center' }
`

export default Container
