import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './header.jsx'
import App from './App.jsx'
import Skill from './skills.jsx'
import Project from './projects.jsx'
import Footer from './footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <App />
    <Skill/>
    <Project/>
    <Footer />
  </StrictMode>,
)
