import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";

const SharedTable = ({ data, columns,buttonstatus,handleSelectedScheme ,viewpremiumbutton}) => {
  console.log(data);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
            {buttonstatus?(<th className="bg-secondary text-center">Buy Policy</th>):
          (<></>)}
          </tr>
          
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>{item[column]}</td>
              ))}
              {viewpremiumbutton?(<td className="bg-secondary"><Button variant="light" value={item['schemename']} onClick={""}>View Policy</Button></td>):
          ("")}
              {buttonstatus?(<td className="bg-secondary"><Button variant="light" value={item['schemename']} onClick={handleSelectedScheme}>Buy_Policy</Button></td>):
          ("")}
          
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default SharedTable;
