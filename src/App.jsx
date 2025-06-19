import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import Login from './Pages/LoginPage'
import ProfilePage from './Pages/ProfilePage'

function App() {

  return (
    <>
    <main className="bg-[url('./src/assets/back_image.jpg')] bg-cover bg-center bg-no-repeat">

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
      </Routes>

    </main>
    </>
  )
}

export default App

