import React from "react";
import { Table } from "reactstrap";

const TableItem = () => {
  return (
    <div>
      <div>
        <div>
          <h1 className="h2">Dashboard</h1>
        </div>
      </div>
      <Table responsive hover striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Name of Items</th>
            <th>Opening stock</th>
            <th>Daily Production</th>
            <th>Closing stock</th>
            <th>Price</th>
            <th>Your Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>11/06/2020</td>
            <td>Diphynyl DT</td>
            <td>210</td>
            <td>20</td>
            <td>230</td>
            <td>#40,000</td>
            <td>John</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>13/06/2020</td>
            <td>Tryphynyl DT</td>
            <td>230</td>
            <td>30</td>
            <td>260</td>
            <td>#70,000</td>
            <td>Tayo</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>14/06/2020</td>
            <td>Pephynyl DT</td>
            <td>260</td>
            <td>10</td>
            <td>270</td>
            <td>#20,000</td>
            <td>John</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TableItem;
