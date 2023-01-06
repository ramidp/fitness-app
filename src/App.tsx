import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import MuscMenu from "./components/MuscMenu";
import ListMenu from "./components/ListMenu";
import NavBar from "./components/NavBar";
import InfoUtil from "./components/InfoUtil";
import Recomendados from "./components/Recomendados";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import WeekMenu from "./components/WeekMenu";
import AeroMenu from "./components/AeroMenu";
import InfoDeRutina from "./components/InfoDeRutina";
import { AuthProvider } from './context/AuthContext';
import RutaPrivada from './components/RutaPrivada';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import LoadingScreen from "./components/LoadingScreen";
import UpBtn from "./components/UpBtn";
import Main from "./components/Main";
import Error404 from "./components/Error404";


// Paleta actual: https://palettes.shecodes.io/palettes/1448

const App = () => {

  const [theme, setTheme] = useState({
    primary: '#113f67',
    secondary: 'black',
    tertiary: '#38598b',
    hover: ' #38598b',
    fourth: 'white',
    fifth: 'gray',
    fontPrim: '#113f67',
    fontBlack: 'black',
    fontTert: '#38598b',
    fontWhite: 'white',
    fontFive: 'gray',
    mainFont: "Red Hat Display",
  })

  return ( 
    <AppContainer>
            <ThemeProvider theme={theme} >
            <AuthProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/loading" element={<LoadingScreen/>}/>
            <Route path="/iniciar-sesion" element={<LogIn/>}/>
            <Route path="/crear-cuenta" element={<SignUp/>}/>

            <Route path="*" element={
                 <RutaPrivada>
                      <NavBar/>
                      <Error404/>
                      <UpBtn/>
                    </RutaPrivada>
                  }/>
            <Route path="/" element={
                 <RutaPrivada>
                      <NavBar/>
                      <Main/>
                      <UpBtn/>
                    </RutaPrivada>
                  }/>

            <Route path="/musculacion" element={
                 <RutaPrivada>
                      <NavBar/>
                      <MuscMenu/>
                      <UpBtn/>
                    </RutaPrivada>
                  }/>

            <Route path="/aerobico" element={
                    <RutaPrivada>
                      <NavBar/>
                      <AeroMenu/>
                      <UpBtn/>
                    </RutaPrivada>
                  }/>

            <Route path="/rutina" element={
                    <RutaPrivada>
                      <NavBar/>
                      <ListMenu/>
                      <UpBtn/>
                    </RutaPrivada>
                  }/>
            <Route path="/semana" element={
                    <RutaPrivada>
                      <NavBar/>
                      <WeekMenu/>
                      <UpBtn/>
                    </RutaPrivada>
                  }/>
            <Route path="/recomendados" element={
                    <RutaPrivada>
                      <NavBar/>
                      <Recomendados/>
                      <UpBtn/>

                    </RutaPrivada>
                  }/>
            <Route path="/info-util" element={
                    <RutaPrivada>
                      <NavBar/>
                      <InfoUtil/>
                      <UpBtn/>
                    </RutaPrivada>
                  }/>
            <Route path="/calculosderutina" element={
                    <RutaPrivada>
                      <NavBar/>
                      <InfoDeRutina/>
                      <UpBtn/>
                    </RutaPrivada>
                  }/>

            <Route path="/contacto" element={
                    <RutaPrivada>
                      <NavBar/>
                      <Footer/>
                      <UpBtn/>
                    </RutaPrivada>
                  }/>
          </Routes>
      </BrowserRouter>
    </AuthProvider>
    </ThemeProvider>
    </AppContainer>
   );
}
 
export default App;

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`