import { HashRouter, Routes, Route } from 'react-router-dom';
import  Books  from './components/Books/Books';
import Categories from './components/Categories/Categories';
import Navbar from './components/common/Navbar';
const App = () => {
    return ( 
      <>
       <HashRouter>
        <Routes>
         <Route element={ < Navbar />} >
           <Route path="/" element={<Books />} exact/>
           <Route path="/Categories" element={<Categories />} />
          </Route>
        </Routes>
       </HashRouter>
      </>
    )
  
} 
export default App;
