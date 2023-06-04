import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Routes} from 'react-router-dom';
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'

import Container from './components/Layout/Container';
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'

function App() {
  return (

    <Router>

      <Navbar/>
      <Container customClass="min-height">
      <Routes>
 
      <Route  path="/" element={<Home/>}></Route>
      <Route  path="/projects" element={<Projects/>}></Route>
      <Route  path="/Company" element={<Company/>}></Route>
      <Route  path="/Contact" element={<Contact/>}></Route>
      <Route  path="/NewProject" element={<NewProject/>}></Route>
      <Route  path="/project/:id" element={<Project/>}></Route>

      </Routes>
      </Container>

      
      <Footer/>
    </Router>














  );
}

export default App;
