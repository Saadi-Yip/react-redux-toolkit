import Navbar from './components/Navbar';
import UserDetails from './components/UserDetails';
import { useSelector } from 'react-redux'; 
function App() { 
  const data = useSelector((state) => {
    return state.users
  })

  
  return (
    <>
      <Navbar />
      <UserDetails data = {data && data}/>
    </>
  );
}

export default App;
