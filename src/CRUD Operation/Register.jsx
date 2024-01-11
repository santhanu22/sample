import React from 'react';
import './Register.css';

export default function Register() {
  async function data1() {
    const name = document.getElementById('NAME').value;
    const phone = document.getElementById('MOBILENO').value;
    const email = document.getElementById('EMAIL').value;
    const username = document.getElementById('USERNAME').value;
    const password = document.getElementById('PASSWORD').value;

    console.log(name);
    console.log(phone);
    console.log(email); 
    console.log(username);
    console.log(password);

    const data2 = {
      aa: name,
      bb: phone,
      cc: email,
      dd: username,
      ee: password,
    };

    try {
      const response = await fetch("https://651ff326906e276284c3c667.mockapi.io/ADMIN", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data2),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
      } else {
        console.error('Failed to submit data');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div className="head">
        <h1>Event Management System</h1>
      </div>
      <div className="tab" >
        <div className="form">
          <h4 style={{ textAlign: "center" }}>Register</h4>
          <form action="" className="ab">
            <label htmlFor="NAME" className="form-label">
              Name
            </label>
            <input type="text" className="form-control ab dis.none" id="NAME" />
            <label htmlFor="MOBILENO" className="form-label">
              Mobile Number
            </label>
            <input type="number" maxLength="10" className="form-control ab dis.none" id="MOBILENO" />
            <label htmlFor="EMAIL" className="form-label">
              E-mail
            </label>
            <input type="email" className="form-control ab dis.none" id="EMAIL" />
            <label htmlFor="USERNAME" className="form-label">
              Username
            </label>
            <input type="text" className="form-control ab dis.none" id="USERNAME" />
            <label htmlFor="PASSWORD" className="form-label">
              Password
            </label>
            <input type="password" className="form-control ab dis.none" aria-describedby="passwordHelpBlock" id="PASSWORD" />
          </form>
          <div className="row">
            <div className="col">
              <button type="button" className="btn" onClick={data1}>
                <span></span>
                <span></span>
                <span></span>
                <span></span> Submit
              </button>
            </div>
            <div className="col pose">
              <a href="/c">
                <button type="submit" className="btn">Register</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

