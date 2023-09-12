import React from 'react'
import { Table } from "reactstrap";

function Commitee() {
  return (
    <div className="container">
      <div style={{ paddingTop: "100px" }}>
        <Table style={{textAlign:'center'}} bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>নাম</th>
              <th>পদবী</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">১</th>
              <td>মোঃ আহসানুল করিম </td>
              <td>সভাপতি</td>
              
            </tr>
            <tr>
              <th scope="row">২</th>
              <td>মোঃ মোজাহেদুল ইসলাম</td>
              <td>সদস্য</td>
              
            </tr>
            <tr>
              <th scope="row">৩</th>
              <td>মোঃ এছারুল হক</td>
              <td>সদস্য</td>
              
            </tr>
            <tr>
              <th scope="row">৪</th>
              <td>মোঃ কামরুল হাছান</td>
              <td>সদস্য</td>
              
            </tr>
            <tr>
              <th scope="row">৫</th>
              <td>মোঃ জাহিদুল ইসলাম</td>
              <td>সদস্য</td>
              
            </tr>
            <tr>
              <th scope="row">৬</th>
              <td>মোঃ মনছুর আলী</td>
              <td>সদস্য</td>
              
            </tr>
            <tr>
              <th scope="row">৭</th>
              <td>মোঃ আব্দুচ্ছালাম</td>
              <td>সদস্য</td>
              
            </tr>
            <tr>
              <th scope="row">৮</th>
              <td>সকাল চন্দ্র রায়</td>
              <td>সদস্য</td>
              
            </tr>
            <tr>
              <th scope="row">৯</th>
              <td>বিনীতা রাণী রায়</td>
              <td>সদস্য</td>
              
            </tr>
            <tr>
              <th scope="row">১০</th>
              <td>রমাপদ রায়</td>
              <td>সম্পাদক/প্রধান শিক্ষক (ভারপ্রাপ্ত)</td>
              
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Commitee