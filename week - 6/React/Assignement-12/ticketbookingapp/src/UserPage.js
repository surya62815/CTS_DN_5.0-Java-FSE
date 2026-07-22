import React from "react";

function UserPage() {
  return (
    <div>
      <h2>User Page</h2>

      <h3>Flight Booking</h3>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Flight No</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI101</td>
            <td>Hyderabad</td>
            <td>Delhi</td>
            <td>09:00 AM</td>
            <td>
              <button>Book</button>
            </td>
          </tr>

          <tr>
            <td>AI202</td>
            <td>Chennai</td>
            <td>Mumbai</td>
            <td>12:30 PM</td>
            <td>
              <button>Book</button>
            </td>
          </tr>

          <tr>
            <td>AI303</td>
            <td>Bangalore</td>
            <td>Kolkata</td>
            <td>06:45 PM</td>
            <td>
              <button>Book</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserPage;