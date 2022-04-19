import './App.css';
import { Routes , Route } from 'react-router-dom'
import Header from './Components/Header/Header';
import { DataProvider } from './Context/Context';
import Details from './Components/Pages/Details/Details';
import Products from './Components/Pages/Products/Products';


function App() {
  return (
    <DataProvider>
         <div className="App">
                <Header/>
             <Routes>
               <Route path='/product' element={<Products/>}/>
               <Route path='/product/:id' element={ <Details/>}/>

             </Routes>
         </div>
    </DataProvider>
  );
}

export default App;
