import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavMenu from './NavMenu';
import ItemDetail from './ItemDetail';
import AdminPanel from './AdminPanel';
import './style.css';
function App() {
 
 
  return (
    <Router>
      <NavMenu />
      <Routes>
        <Route path="/" element ={<h1><center>Welcome to SCP crud Application</center></h1>}/>
        < Route path= "/item/:id" element={<ItemDetail />}/>
        <Route path="/admin" element={<AdminPanel/>}/>
      </Routes>
    </Router>
  )
}
 
export default App
 
