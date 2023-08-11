import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './Pages/Home/Home';
import Archive from './Pages/Archive/Archive'
import HabitListing from './Pages/HabitListing/HabitListing'
import EachHabit from './Pages/EachHabit/EachHabit'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/eachhabit/:habitId' element={<EachHabit/>}/>
        <Route path='/archive' element={<Archive/>}/>
        <Route path='/habits' element={<HabitListing/>}/>
      </Routes>
    </div>
  );
}
export default App;


