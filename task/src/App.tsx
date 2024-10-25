import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header/Header'
import Container from './components/Container/Container'
import { HomePage } from './pages/Homepage/HomePage'
import { CreatePost } from './pages/CreatePost/CreatePost'
import { DetailedPost } from './pages/DetailedPost/DetailedPost'
import { PageNotFound } from './pages/PageNotFound/PageNotFound'

const App: React.FC = () => {

  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<DetailedPost />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
