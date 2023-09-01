import React from "react";
import { Table } from "react-bootstrap";

const SharedTable = ({ data, columns }) => {
  //   let tabledata;
  //   let index=0;

  //   if(data.length>0){
  //     tabledata = data.map((dt)=>{
  //         return (
  //             <tr>
  //             <th scope="row">{++index}</th>
  //             <td>{acc.accountno}</td>
  //             <td>{acc.balance}</td>
  //             </tr>
  //         )
  //     })
  //   }
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>{item[column]}</td>
              ))}
            </tr>
          ))}
          {}
        </tbody>
      </Table>
    </div>
  );
};

export default SharedTable;
