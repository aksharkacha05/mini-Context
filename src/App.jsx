
import './App.css'
import Login from './componets/Login'
import Profile from './componets/Profile'
import UserContextProvider from './conext/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>Website</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App