import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Box } from '@mui/system';
import Settings from './pages/Settings';
import Questions from './pages/Questions';
import FinalScore from './pages/FinalScore';
import { Container, Typography } from '@mui/material';

function App() {
  return (
    <Router>
      <Container maxWidth="sm"> 
        <Box textAlign="center" mt={5}>
          <Typography variant="h2" fontWeight="bold">
            Quiz App
          </Typography>
          <Routes>
            <Route exact path="/" element={<Settings/>} />
            <Route exact path="/questions" element={<Questions />} />
            <Route exact path="/score" element={<FinalScore />} />
          </Routes>
        </Box>       
      </Container>
    </Router>
  );
}

export default App;
