import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header/Header'
import Container from './components/Conteiner/Container'
import { HomePage } from './pages/Homepage/HomePage'

const App: React.FC = () => {

  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<div> Create World!</div>} />
        </Routes>
      </Container>
    </>
  )
}

export default App
