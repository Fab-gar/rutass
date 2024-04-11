
import './App.css'
import { Link, Outlet } from'react-router-dom'
import  'react'
function App() {
  
  return (
    
     <div > 
      <Outlet/>
      <h1>hola amor</h1>
      <nav>
    <Link to= '/Invoices'>Invoices</Link>
    <Link to= '/Expenses'>Expenses</Link>
    
    </nav>
     </div>
    
  )
}
export default App
