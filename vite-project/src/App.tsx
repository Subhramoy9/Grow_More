

import Form from './components/Form'
import Page2 from './components/Page2';
import './App.css'
import {
  BrowserRouter as
    Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
     <Route path = '/' element={<Form/>}/>
     <Route path = '/page2' element={<Page2/>}/>
     </Routes>
     </Router>
    </>
  )
}

export default App
