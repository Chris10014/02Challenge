import TableCell from "./TableCellComponent";

const TableRowComponent = ({ item }) => {

    return (
        <tr>
          {Object.entries(item).map(([key, value]) => (
            <TableCell key={key} cellData={JSON.stringify(value)} />            
          ))}
        </tr>
      );
    };

export default TableRowComponent;