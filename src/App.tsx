import 'normalize.css';
import './index.css'
import NavBar from './components/general/NavBar';
import { Route, Routes } from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Products';
import Home from './components/pages/Home';
import Users from './components/pages/Users';
import NotFound from './components/pages/NotFound';

function App() {
  // const [search, setSearch] = useState('');

  return (
    <div>
      <Routes>
        <Route path='/' element={<NavBar/>}>
          <Route path='about' element={<About/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='Products' element={<Contact/>}/>
          <Route path='users' element={<Users/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
        
      </Routes>
    </div>
    

  )
}


export default App
