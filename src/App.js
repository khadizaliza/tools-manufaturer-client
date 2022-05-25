
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Home/Shared/Navbar';
import NotFound from './Pages/NotFound';
import Blog from './Pages/Blog'
import MyPortfolio from './Pages/MyPortfolio';
import Purchase from './Pages/Purchase';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
      <Route path='/home' element={<Home></Home>}></Route>
      
      {/* <Route path='/appoinment' element={<Appoinment></Appoinment>}></Route> */}
      <Route path='/login' element={<Login></Login>}></Route>
      {/* <Route path='/signup' element={<SignUp></SignUp>}></Route> */}
      <Route path='/service/:serviceId' element={<Purchase></Purchase>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>

      <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
