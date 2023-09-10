import React from "react";
import { Table } from "reactstrap";

export default function Assistant() {
  return (
    <div className="container">
      <div style={{ paddingTop: "100px" }}>
        <Table bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>শিক্ষকের নাম</th>
              <th>পদবী</th>
              <th>মোবাইল নং</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>জয়ন্তর বাপ</td>
              <td>সভাপতি</td>
              <td>দেয়া যাবে না</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            
          </tbody>
        </Table>
      </div>
    </div>
  );
}
