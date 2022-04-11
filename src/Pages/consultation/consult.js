/* eslint-disable no-useless-escape */
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import psyService from "../../Services/psy.service";
import "reactjs-popup/dist/index.css";
import { useHistory } from "react-router-dom";
import { browserHistory } from "react-router";

export default function consult() {
  var firstName = "";
  var lastName = "";
  var clientUsername = "";
  var birthdate = "";
  var clientMail = "";
  var clientPhone = "";
  var country = "";
  var city = "";

  var countries = require("../Data/CountryCodes.json").map(
    (countrys) => countrys.name
  );
  var countriesNamesCodes = require("../Data/CountryCodes.json");

  function validateFirstName() {
    if (!firstName) {
      document.getElementById("fName").innerHTML = "Required field";
      return false;
    } else {
      document.getElementById("fName").innerHTML = null;
      return true;
    }
  }

  function validateLastName() {
    if (!lastName) {
      document.getElementById("lName").innerHTML = "Required field";
      return false;
    } else {
      document.getElementById("lName").innerHTML = null;
      return true;
    }
  }

  function validateUserName() {
    if (!clientUsername) {
      document.getElementById("uName").innerHTML = "Required field";
      return false;
    } else {
      document.getElementById("uName").innerHTML = null;
      return true;
    }
  }

  function validateEmail() {
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!clientMail) {
      document.getElementById("mail").innerHTML = "Required field";
      return false;
    } else if (!clientMail.toLowerCase().match(re)) {
      document.getElementById("mail").innerHTML = "Invalid email adress";
      return false;
    } else {
      document.getElementById("mail").innerHTML = null;
      return true;
    }
  }

  function validPhoneNumber() {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (!clientPhone) {
      document.getElementById("phone").innerHTML = "Required field";
      return false;
    } else if (!clientPhone.match(re)) {
      document.getElementById("phone").innerHTML = "Invalid phone number";
      return false;
    } else {
      document.getElementById("phone").innerHTML = null;
      return true;
    }
  }

  function validateCountry() {
    if (!country) {
      document.getElementById("ctry").innerHTML = "Please select your country";
      return false;
    } else {
      document.getElementById("ctry").innerHTML = null;
      return true;
    }
  }

  function validateCity() {
    if (!city) {
      document.getElementById("cty").innerHTML = "Required field";
      return false;
    } else {
      document.getElementById("cty").innerHTML = null;
      return true;
    }
  }

  function validateBirthDate() {
    if (!birthdate) {
      document.getElementById("birth").innerHTML = "Please enter birthdate";
      return false;
    } else {
      document.getElementById("birth").innerHTML = null;
      return true;
    }
  }

  function onChangeFirstName(e) {
    firstName = e.target.value;
    document.getElementById("confirmation").style.visibility = "hidden";
  }

  function onChangeLastName(e) {
    lastName = e.target.value;
    document.getElementById("confirmation").style.visibility = "hidden";
  }

  function onChangeUserName(e) {
    clientUsername = e.target.value;
    document.getElementById("confirmation").style.visibility = "hidden";
  }

  function onChangeEmail(e) {
    clientMail = e.target.value;
    document.getElementById("confirmation").style.visibility = "hidden";
  }

  function onChangePhoneNumber(e) {
    clientPhone = e.target.value;
    document.getElementById("confirmation").style.visibility = "hidden";
  }

  function onChangeCountry(e) {
    country = e.target.value;
    var phoneCode = countriesNamesCodes.find(
      (ctry) => ctry.name === country
    ).dial_code;
    var v = String(document.getElementById("phoneNumber").value);
    if (
      !v.startsWith(phoneCode) &&
      !v.startsWith("00" + phoneCode.replace("+", ""))
    ) {
      document.getElementById("phoneNumber").value = phoneCode;
      document.getElementById("confirmation").style.visibility = "hidden";
    }
  }

  function onChangeCity(e) {
    city = e.target.value;
    document.getElementById("confirmation").style.visibility = "hidden";
  }

  function onChangeBirthDate(e) {
    birthdate = e.target.value;
  }

  function validateForm() {
    validateFirstName();
    validateLastName();
    validateUserName();
    validateEmail();
    validateBirthDate();
    validateCountry();
    validPhoneNumber();
    validateCity();
  }

  function createRequest() {
    var id = 0;
    var status = 0;
    var psyId = "";
    var psy = null;
    psyService
      .createRequest(
        id,
        clientMail,
        clientPhone,
        clientUsername,
        firstName,
        lastName,
        birthdate,
        country,
        city,
        status,
        psyId,
        psy
      )
      .then((res) => {
        if (res.status == 200) {
          handleClose();
        } else {
          document.getElementById("valid").innerHTML = "An error has occured";
          document.getElementById("confirmation").style.visibility = "hidden";
        }
      });
  }

  function handleClose() {
    document.getElementById("form").reset();
    document.getElementById("confirmation").style.visibility = "hidden";

    window.location.reload();
  }

  function handleShow() {
    validateForm();
    if (
      !validateFirstName() ||
      !validateLastName() ||
      !validateUserName() ||
      !validateEmail() ||
      !validateBirthDate() ||
      !validateCountry() ||
      !validPhoneNumber() ||
      !validateCity()
    ) {
      document.getElementById("valid").innerHTML =
        "One or more fields are not valid";
    } else {
      document.getElementById("valid").innerHTML = null;
      document.getElementById("confirmation").style.visibility = "visible";
    }
  }

  return (
    <div>
      <section className="counter" id="consultation">
        <div className="page-section">
          <div className="container">
            <h1 className="text-center wow fadeInUp">Prendre Rendez-vous</h1>

            <form id="form" className="main-form">
              <div className="row mt-5 ">
                <div className="col-12 col-sm-6 py-2 wow fadeInLeft">
                  <input
                    type="text"
                    onChange={onChangeFirstName}
                    className="form-control"
                    placeholder="First name"
                  />
                  <p style={{ color: "red" }} id="fName"></p>
                  <p>{firstName}</p>
                </div>
                <div className="col-12 col-sm-6 py-2 wow fadeInLeft">
                  <input
                    type="text"
                    onChange={onChangeLastName}
                    className="form-control"
                    placeholder="Last name"
                  />
                  <p style={{ color: "red" }} id="lName"></p>
                </div>
                <div
                  className="col-12 col-sm-6 py-2 wow fadeInRight"
                  data-wow-delay="300ms"
                >
                  <Form.Select
                    onChange={onChangeCountry}
                    name="departement"
                    id="departement"
                    className="custom-select"
                  >
                    <option key="blankChoice" hidden value>
                      {" "}
                      Select your country{" "}
                    </option>
                    {countries.map((x, y) => (
                      <option key={y}>{x}</option>
                    ))}
                  </Form.Select>
                  <p style={{ color: "red" }} id="ctry"></p>
                </div>
                <div
                  className="col-12 col-sm-6 py-2 wow fadeInRight"
                  data-wow-delay="300ms"
                >
                  <input
                    type="text"
                    onChange={onChangeCity}
                    className="form-control"
                    placeholder="City"
                  />
                  <p style={{ color: "red" }} id="cty"></p>
                </div>
                <div className="col-12 col-sm-6 py-2 wow fadeInRight">
                  <input
                    type="email"
                    onChange={onChangeEmail}
                    className="form-control"
                    placeholder="Email address"
                  />
                  <p style={{ color: "red" }} id="mail"></p>
                </div>
                <div
                  className="col-12 col-sm-6 py-2 wow fadeInRight"
                  data-wow-delay="300ms"
                >
                  <input
                    type="tel"
                    id="phoneNumber"
                    onChange={onChangePhoneNumber}
                    className="form-control"
                    placeholder="Phone number"
                  />
                  <p style={{ color: "red" }} id="phone"></p>
                </div>
                <div
                  className="col-12 col-sm-6 py-2 wow fadeInRight"
                  data-wow-delay="300ms"
                >
                  <input
                    type="text"
                    onChange={onChangeUserName}
                    className="form-control"
                    placeholder="Username"
                  />
                  <p style={{ color: "red" }} id="uName"></p>
                </div>
                <div
                  className="col-12 col-sm-6 py-2 wow fadeInLeft"
                  data-wow-delay="300ms"
                >
                  <input
                    type="date"
                    max="2004-04-10"
                    onChange={onChangeBirthDate}
                    className="form-control"
                  />
                  <p style={{ color: "red" }} id="birth"></p>
                </div>
              </div>
              <button
                type="button"
                data-dismiss="alert"
                onClick={() => {
                  handleShow();
                }}
                className="btn btn-primary mt-3 wow zoomIn"
              >
                Submit Request
              </button>
              <p style={{ color: "red" }} id="valid"></p>
              <div style={{ visibility: "hidden" }} id="confirmation">
                <p> Une demande de consultation sera envoyée avec votre adresse mail.</p>
                <p> Êtes-vous sûr de vouloir confirmer ?</p>
                <button
                  id="create"
                  type="button"
                  onClick={() => {
                    createRequest();
                  }}
                  className="btn btn-success mt-3 wow zoomIn"
                >
                  Confirm
                </button>{" "}
                <button
                  type="button"
                  onClick={() => {
                    handleClose();
                  }}
                  className="btn btn-danger mt-3 wow zoomIn"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
