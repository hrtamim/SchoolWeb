import React from 'react'
import { Table } from 'reactstrap'
function Links() {
  return (
    <div style={{paddingRight:100,paddingLeft:100}}>
        <div style={{paddingTop:100}}>
        <Table>
  <thead>
    <tr>
      <th style={{width:'40vw'}}>
        <h5>নাম</h5>
      </th>
      <th style={{width:'35vw'}}>
        লিংক
      </th>
      <th style={{textAlign:'center'}}>
    অ্যাকশন
      </th>
    </tr>
  </thead>
  <tbody>
    <tr className="table-primary">
      <td>
        একাদশ শ্রেণীতে ভর্তি আবেদন
      </td>
      <td>
      xiclassadmission.gov.bd
      </td>
      <td style={{textAlign:'center'}}>
      Click Here
      </td>
    </tr>
    <tr className="table-secondary">
      <td>
        secondary
      </td>
      <td>
        Cell
      </td>
      <td style={{textAlign:'center'}}>
      Click Here
      </td>
    </tr>
    <tr className="table-success">
      <td>
        success
      </td>
      <td>
        Cell
      </td>
      <td style={{textAlign:'center'}}>
      Click Here
      </td>
    </tr>
    <tr className="table-danger">
      <td>
        danger
      </td>
      <td>
        Cell
      </td>
      <td style={{textAlign:'center'}}>
      Click Here
      </td>
    </tr>
    <tr className="table-warning">
      <td>
        warning
      </td>
      <td>
        Cell
      </td>
      <td style={{textAlign:'center'}}>
      Click Here
      </td>
    </tr>
    <tr className="table-info">
      <td>
        info
      </td>
      <td>
        Cell
      </td>
      <td style={{textAlign:'center'}}>
      Click Here
      </td>
    </tr>
    <tr className="table-light">
      <td>
        light
      </td>
      <td>
        Cell
      </td>
      <td style={{textAlign:'center'}}> 
        Click Here
      </td>
    </tr>
    
  </tbody>
</Table>
        </div>
        </div>
  )
}

export default Links