
const ListComponent = ({ items, ressource, setRessource }) => {
return (
  <div>
    <button 
    className={ressource === "users" ? "selected" : null}
    onClick={() => setRessource("users")}
    type="button">
      users
    </button>
    <button 
    className={ressource === "posts" ? "selected" : null}
    onClick={() => setRessource("posts")}
    type="button">
      posts
    </button>
    <button 
    className={ressource === "comments" ? "selected" : null}
    onClick={() => setRessource("comments")}
    type="button">
      comments
    </button>
    <ul>
        {(items).map(item => (       
            <li key={item.id}>{JSON.stringify(item)}</li>         
        ))}
    </ul>
    </div>
)    
}

export default ListComponent;