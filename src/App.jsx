import './App.css'
import HomePage from './HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewPage from './NewPage'

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" exact component={HomePage} />
      <Route path="/new-page" component= {NewPage}/>
    </Routes>
  </Router>
    
  )
}

export default App
