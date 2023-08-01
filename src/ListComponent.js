import LineItem from "./LineItemComponent";

const ListComponent = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem key={item.id} item={item}/>
      ))}    
    </ul>
  )
}

export default ListComponent;