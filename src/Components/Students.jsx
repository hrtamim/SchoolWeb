import React from "react";
import { Table } from "reactstrap";

export default function Assistant() {
  return (
    <div className="container">
      <div style={{ paddingTop: "100px" }}>
        <Table style={{textAlign:'center'}} bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>শ্রেনী</th>
              <th>ছাত্র</th>
              <th>ছাত্রী</th>
              <th>মোট শিক্ষার্থী</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">১</th>
              <td>ষষ্ঠ</td>
              <td>৩০</td>
              <td>৫২</td>
              <td>৮২</td>
            </tr>
            <tr>
              <th scope="row">২</th>
              <td>সপ্তম</td>
              <td>৩৫</td>
              <td>৫৩</td>
              <td>৮৮</td>
            </tr>
            <tr>
              <th scope="row">৩</th>
              <td>অষ্টম</td>
              <td>২৫</td>
              <td>৪০</td>
              <td>৬৫</td>
            </tr>
            <tr>
              <th scope="row">৪</th>
              <td>নবম</td>
              <td>২৬</td>
              <td>৪৫</td>
              <td>৭১</td>
            </tr>
            <tr>
              <th scope="row">৫</th>
              <td>দশম</td>
              <td>৩০</td>
              <td>৩৯</td>
              <td>৬৯</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
