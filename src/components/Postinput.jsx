import React, { useState } from "react";
import axios from "axios";
import FormData from "form-data";

const Postinput = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    birthDay: "",
    gender: "",
    photo: "",
    pdf: "",
  });

  function submit(e) {
    e.preventDefault();

    let formdata = new FormData();

    formdata.append("firstName", data.firstName);
    formdata.append("lastName", data.lastName);
    formdata.append("yyyy-MM-dd", data.birthDay);
    formdata.append("gender", data.gender);
    formdata.append("photo", data.photo);
    formdata.append("pdf", data.pdf);

    axios({
      method: "post",
      url: "http://intern-2022.arpify.com/form",
      data: formdata,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  const handleInputChange = (e) => {
    const newdata = {...data}
    newdata[e.target.id] = e.target.files[0];
    setData(newdata);
  };

  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <input
          onChange={(e) => handle(e)}
          id="firstName"
          value={data.firstName}
          type="text"
        />
        <input
          onChange={(e) => handle(e)}
          id="lastName"
          value={data.lastName}
          type="text"
        />
        <input
          onChange={(e) => handle(e)}
          id="birthDay"
          value={data.birthDay}
          type="date"
        />
        <input
          onChange={(e) => handle(e)}
          type="radio"
          id="gender"
          value="male"
        />{" "}
        Male
        <input
          onChange={(e) => handle(e)}
          type="radio"
          id="gender"
          value="female"
        />{" "}
        Female
        <input onChange={(e) => handleInputChange(e)} type="file" id="img" />
        <input
          onChange={(e) => handleInputChange(e)}
          type="file"
          name="Upload"
          accept="application/pdf"
          id="pdf"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Postinput;
