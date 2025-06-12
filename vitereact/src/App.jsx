import Chai from './chai'
import './App.css'

function App() {
  const username = "Manik sharma"/* jo usernamwe humne likha h woh ek evaluated expression 
  h js ka ek eval;uated expression */
  return (
    <>
      <Chai />
      <h1>Manik sharma plays valo {username}</h1>
    </>
  )
}

export default App
