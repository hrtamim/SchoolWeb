import React from "react";
import "./officials.css";
import { Table } from "reactstrap";

export default function Officials() {
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
              <th scope="row">১</th>
              <td>রমাপদ রায়</td>
              <td>প্রধান শিক্ষক (ভারপ্রাপ্ত)</td>
              <td>দেয়া যাবে না</td>
            </tr>
            <tr>
              <th scope="row">২</th>
              <td>মোঃ তাফাজ্জুল হোসেন</td>
              <td>সহকারী শিক্ষক</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">৩</th>
              <td>মোঃ কামরুল হাসান</td>
              <td>সহকারী শিক্ষক</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">৪</th>
              <td>মোঃ আব্দুল আজিজ সরকার</td>
              <td>সহকারী শিক্ষক</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">৫</th>
              <td>মোঃ আব্দুচ্ছালাম </td>
              <td>সহকারী শিক্ষক</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">৬</th>
              <td>মোছাঃ রেহানা বেগম</td>
              <td>সহকারী শিক্ষক</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">৭</th>
              <td>সকাল চন্দ্র রায়</td>
              <td>সহকারী শিক্ষক</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">৮</th>
              <td>বিনীতা রাণী রায় </td>
              <td>সহকারী শিক্ষক</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">৯</th>
              <td>মোঃ হাবিবুর রহমান</td>
              <td>সহকারী শিক্ষক</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">১০</th>
              <td>সুধেন চন্র রায়</td>
              <td>সহকারী শিক্ষক</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">১১</th>
              <td>মোছাঃ জাকিয়া জান্নাতি</td>
              <td>সহকারী শিক্ষক</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">১২</th>
              <td>মোঃ আবদুস ছালাম</td>
              <td>নিম্নমান সহকারী কাম কম্পিউটার</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">১৩</th>
              <td>মোঃশিদুল ইসলাম</td>
              <td>দপ্তরী</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">১৪</th>
              <td>মোঃ আব্দুল কুদ্দুস</td>
              <td>নৈশ প্রহরী</td>
              <td>@twitter</td>
            </tr>

          </tbody>
        </Table>
      </div>
    </div>
  );
}
