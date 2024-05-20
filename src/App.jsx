
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Analytics } from "@vercel/analytics/react"
import Home from "./Home";
import Error from './Error';
import { ThemeProvider } from '@mui/material/styles';
import darkTheme from './theme';
import ErrorPage from './Error';
function App() {


  return (
    <>

    <RecoilRoot>
    <ThemeProvider theme={darkTheme}>
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </ThemeProvider>
    <Analytics/>
    </RecoilRoot>
      
    </>
  )
}

export default App
