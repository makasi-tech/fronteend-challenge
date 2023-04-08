import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/perfil/:username" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  )
}
