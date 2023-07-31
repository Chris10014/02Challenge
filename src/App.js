import { useState, useEffect } from 'react';
import List from "./ListComponent";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com";

  const [ressource, setRessource] = useState("");
  const [selectedRessource, setSelectedRessource] = useState([]);
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)  

  useEffect(() => {

    const fetchRessource = async () => {
      try {
        const response = await fetch(`${API_URL}/${ressource}`);
        if(!response.ok) throw Error("Did not receive expected data.")
        const listRessource = await response.json();
        setSelectedRessource(listRessource)
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message)
      } finally {
        setIsLoading(false);
      }
    }
  }, [ressource])

  return (
    <div className="App">
     <main>
        {isLoading && <p>Loading items ...</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && 
          <List
            setRessource={setRessource}
            selectedRessource={selectedRessource}
          />}
      </main>
    </div>
  );
}

export default App;
