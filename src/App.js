
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Home/Shared/Navbar';
import NotFound from './Pages/NotFound';
import Blog from './Pages/Blog'
import MyPortfolio from './Pages/MyPortfolio';
import Purchase from './Pages/Purchase';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import Reviews from './Pages/Home/Reviews';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyBooking from './Pages/Dashboard/MyBooking';
import MyReview from './Pages/Dashboard/MyReview';
import Users from './Pages/Dashboard/Users';
import About from './Pages/Home/About';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      
      {/* <Route path='/appoinment' element={<Appoinment></Appoinment>}></Route> */}
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
      <Route path='/purchase' element={<RequireAuth>
        <Purchase></Purchase>
      </RequireAuth>}></Route>
      <Route path='/dashboard' element={<RequireAuth>
        <Dashboard></Dashboard>
      </RequireAuth>}>

        <Route index element={<MyBooking></MyBooking>}></Route>
        <Route path='review' element={<MyReview></MyReview>}></Route>
        <Route path='users' element={<Users></Users>}></Route>
      </Route>
     <Route path='/blog' element={<Blog></Blog>}></Route>
     <Route path='/reviews' element={<Reviews></Reviews>}></Route>
      <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>

      <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
