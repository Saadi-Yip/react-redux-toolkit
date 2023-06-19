  import { useEffect } from 'react';
import Navbar from './components/Navbar';
import UserDetails from './components/UserDetails'; 

function App() {
  useEffect(() => {
    fetch("https://leilani-blogs.cyclic.app/service", {
      headers: {
        'Access-Control-Allow-Origin': true
      }
    })
    .then(async response => {
      let data = await response.json()
      console.log(data);
    })
       
  }, [])
  return (
    <div className="App">
      <Navbar/>
      <UserDetails/>
    </div>
  );
}

export default App;
