<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login Page</title>
  <link rel="stylesheet" href="style.css" />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\nbody {\n            font-family: Arial, sans-serif;\n            margin: 0;\n            padding: 0;\n            background-color: #f9f9f9;\n            color: #333;\n        }\n        .container {\n            max-width: 600px;\n            margin: 0 auto;\n            padding: 20px;\n            background-color: #fff;\n            border-radius: 10px;\n            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n        }\n.container3 {\n            max-width: 800px;\n            margin: 0 auto;\n            padding: 20px;\n        }\n\t.container img {\n            max-width: 100%;\n            height: auto;\n        }\n        .logo {\n            display: block;\n            margin: 0 auto;\n            margin-bottom: 20px;\n            max-width: 100%;\n            height: auto;\n        }\n \t        }\n        h2 {\n            text-align: center;\n            margin-top: 0;\n        }\n        label {\n            font-weight: bold;\n            display: block;\n            margin-bottom: 5px;\n        }\n        input[type="text"],\n        input[type="password"],\n        button {\n            width: 100%;\n            padding: 10px;\n            margin-top: 10px;\n            border: 1px solid #ccc;\n            border-radius: 5px;\n            box-sizing: border-box;\n            font-size: 16px;\n        }\n        button {\n            background-color: #4caf50;\n            color: #fff;\n            font-weight: bold;\n            cursor: pointer;\n            transition: background-color 0.3s;\n        }\n        button:hover {\n            background-color: #45a049;\n        }\n        .options {\n            margin-top: 10px;\n            text-align: center;\n        }\n        .options a {\n            text-decoration: none;\n            color: blue;\n            margin: 0 10px;\n            font-size: 14px;\n            transition: color 0.3s;\n        }\n        .options a:hover {\n            color: pink;\n        }\n        #detailsPage {\n            display: none;\n            margin-top: 20px;\n            background-color: #fff;\n            padding: 20px;\n            border-radius: 10px;\n            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n        }\n        table {\n            width: 100%;\n            margin-top: 10px;\n            border-collapse: collapse;\n        }\n        th, td {\n            padding: 8px;\n            border-bottom: 1px solid #ddd;\n            text-align: left;\n        }\n        th {\n            background-color: #f2f2f2;\n            font-weight: bold;\n        }\n        th:first-child, td:first-child {\n            width: 30%;\n        }\n        .userImageCell {\n            text-align: right;\n        }\n        #adminDetails {\n            display: none;\n            margin-top: 20px;\n            background-color: #fff;\n            padding: 20px;\n            border-radius: 10px;\n            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n        }\n    '
    }}
  />
  <div className="container">
    <div id="loginForm">
      <img
        className="logo"
        src="https://erp.lbrce.ac.in/Images/title.png"
        width={400}
        height={150}
        alt="College Logo"
      />
      <center>
        <h2>Login</h2>
      </center>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" required="" />
      <br />
      <br />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" required="" />
      <br />
      <br />
      <button onclick="login()">Login</button>
      <br />
      <br />
      <div className="options">
        <a href="fp.html">Forgot password?</a>
        <span>|</span>
        <a href="reg.html">Sign up</a>
      </div>
    </div>
  </div>
  <div className="container3">
    <div id="detailsPage">
      <center>
        <img
          src="https://erp.lbrce.ac.in/Images/title.png"
          alt="College Logo"
        />
        <div id="menu">
          <a href="index.html">HOME</a>
          <a href="dashboard.html">DASHBOARD</a>
          <a href="sports.html">SPORTS/NSS/YOGA</a>
          <a href="cultural.html">CULTURAL</a>
          <a href="events.html">EVENTS</a>
          <a href="courses.html">COURSE</a>
          <a href="ws.html">Workshops</a>
        </div>
      </center>
      <table id="userTable">
        <tbody>
          <tr>
            <th>Name</th>
            <td id="userNameCell" />
          </tr>
          <tr>
            <th>Mobile</th>
            <td id="userMobileCell" />
          </tr>
          <tr>
            <th>Department</th>
            <td id="userDepartmentCell" />
          </tr>
          <tr>
            <th>Year</th>
            <td id="userYearCell" />
          </tr>
          <tr>
            <th>Roll Number</th>
            <td id="userRollnumberCell" />
          </tr>
          <tr>
            <th>Mail id</th>
            <td id="userMailidCell" />
          </tr>
          <tr>
            <th>Image</th>
            <td id="userImageCell">
              <img className="user-image" src="" alt="User Image" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="adminDetails">
      <center>
        <h2>Admin Details</h2>
        <table id="adminTable">
          <tbody>
            <tr>
              <th>Name</th>
              <td id="adminNameCell" />
            </tr>
            <tr>
              <th>Department</th>
              <td id="adminDepartmentCell" />
            </tr>
            <tr>
              <th>Mobile</th>
              <td id="adminMobileCell" />
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  </div>
  <footer>
    <center>
      <h6>
        <a href="des.html">
          Designed &amp; Developed by Dept.of ARTFICIAL INTELLIGENCE &amp; DATA
          SCIENCE
        </a>
      </h6>
    </center>
  </footer>
</>
