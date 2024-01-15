import './App.css'
import HomePage from './HomePage'
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import NewPage from './NewPage'

function App() {
  return (
  
    <Routes>
      <Route path="/" exact component={HomePage} />
      <Route path="/new-page" component= {NewPage}/>
    </Routes>
    
  )
}

export default App
