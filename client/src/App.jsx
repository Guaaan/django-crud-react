import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom';
import ItemsPage from './pages/ItemsPage';
import ItemsFormPage from './pages/ItemFormPage';
import {Navigation} from './components/Navigation';
function App(){
  return (
    <BrowserRouter>

      <Navigation/>

      <Routes>
        <Route path="/" element={<Navigate to="/items"/>}/>
        <Route path="/items" element={<ItemsPage/>}/>
        <Route path="/items-create" element={<ItemsFormPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;