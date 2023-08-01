import TableRow from "./TableRowComponent";

const TableComponent = ({ items }) => {
  return (
    <table className="table-container">
        <thead>
        </thead>
        <tbody>
            {items.map((item) => (
            <TableRow key={item.id} item={item}/>
            ))} 
        </tbody> 
    </table>
  )
}

export default TableComponent;