import { useState, useEffect } from 'react';
import List from "./ListComponent";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";

  const [ressource, setRessource] = useState("users");
  const [items, setitems] = useState([]);

  useEffect(() => {

    const fetchRessource = async () => {
      try {
        const response = await fetch(`${API_URL}${ressource}`);
        if(!response.ok) throw Error("Did not receive expected data.")
        const data = await response.json();
        setitems(data)       
      } catch (err) {
       console.log(err)
      } 
    }
    fetchRessource();    
  }, [ressource])

  return (
    <div className="App">    
          <List ressource={ressource} items={items} setRessource={setRessource} />    
    </div>
  );
}

export default App;
