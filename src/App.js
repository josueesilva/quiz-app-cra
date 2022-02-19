import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Start from './pages/Start';
import Questions from './pages/Questions';
import FinalScore from './pages/FinalScore';
import ContainerWrapper from './components/ContainerWrapper'
import Header from './components/Header'
import Container from './components/Container'

function App() {
  return (
    <Router>
      <ContainerWrapper maxWidth="sm"> 
        <Container>
          <Header>
            Quiz App
          </Header>
        </Container>  
        <Container>
          <Routes>
            <Route exact path="/" element={<Start />} />
            <Route exact path="/questions" element={<Questions />} />
            <Route exact path="/score" element={<FinalScore />} />
          </Routes>
        </Container>       
      </ContainerWrapper>
    </Router>
  );
}

export default App;
