
const ListComponent = ( { selectedRessource, setRessource }) => {
  
  return (
   <> 
    <button 
      role="button"
      onClick={() => setRessource("users")}
    >Users
    </button>
    <button
      role="button"
      onClick={() => setRessource("post")}
    >Posts
    </button>
    <button
      role="button"
      onClick={() => setRessource("comments")}
    >Comments
    </button>
    </>
    {selectedRessource.length ? selectedRessource.map((item) => {
      return (
      <ul>
        {JSON.stringify(item)}
       </ul>
      )    
    : null
    })}
    

  );
}

export default ListComponent