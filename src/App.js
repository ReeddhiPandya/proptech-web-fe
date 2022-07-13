import './App.css';
import { ThemeProvider } from '@mui/material/styles'
import PTButton from './components/PTButton';
import { theme } from './utils/theme';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import DeleteIcon from '@mui/icons-material/Delete';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailCheck from './pages/EmailCheck';
import EmailReset from './pages/EmailReset';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/emailcheck" element={<EmailCheck />} />
          <Route path="/emailreset" element={<EmailReset />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
