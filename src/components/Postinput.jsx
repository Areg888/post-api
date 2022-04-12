import React, { useState } from "react";

export const Postinput = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [gender, setGender] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();

    const photoInput = document.querySelector("#photo");
    const pdfInput = document.querySelector("#pdf");
    let formData = new FormData();
    formData.append("photo", photoInput.files[0], photoInput.files[0].name);
    formData.append("pdfFile", pdfInput.files[0], pdfInput.files[0].name);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("birthDay", birthDay);
    formData.append("gender", gender);

    let requestOptions = {
      method: "POST",
      body: formData,
    };

    fetch("http://intern-2022.arpify.com/form", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First name"
        type="text"
        name="firstName"
        required
      />
      <input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last name"
        type="text"
        name="lastName"
        required
      />
      <input
        value={birthDay}
        onChange={(e) => setBirthDay(e.target.value)}
        placeholder="birthDay"
        type="date"
        name="date"
        required
      />
      <input
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        placeholder="gender"
        type="text"
        name="text"
        required
      />

      <input type="file" name="photo" id="photo" accept=".jpg,.jpeg, png" />
      <input
        style={{ cursor: "pointer", padding: "10px" }}
        type="file"
        id="pdf"
        name="pdfFile"
        accept=".pdf"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
