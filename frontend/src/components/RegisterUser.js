import { useState } from "react";
import Axios from "axios";

const RegisterUser = () => {
  const axios = require('axios');
  const [email, setEmail] = useState("");
  const [ps1, setPs1] = useState("");
  const [ps2, setPs2] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [major, setMajor] = useState("");
  const [real, setReal] = useState("");
  const onChange = (event) => {
    const { name, value } = event.target;
    if (name === "Email") {
      setEmail((prev) => value);
    } else if (name === "Password1") {
      setPs1((prev) => value);
    } else if (name === "Password2") {
      setPs2((prev) => value);
    } else if (name === "Age") {
      setAge((prev) => value);
    } else if (name === "Gender") {
      setGender((prev) => value);
    } else if (name === "Phone") {
      setPhone((prev) => value);
    } else if (name === "Major") {
      setMajor((prev) => value);
    } else if (name === "Realname") {
      setReal((prev) => value);
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:8000/user/rest-auth/registration", {
        Email: email,
        Password1: ps1,
        Password2: ps2,
        Age: age,
        Gender: gender,
        Phone: phone,
        Major: major,
        Realname: real,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="Email"
          onChange={onChange}
          placeholder="충북대 웹메일"
          value={email}
          required
        />
        <br />
        <input
          name="Password1"
          onChange={onChange}
          placeholder="비밀번호"
          value={ps1}
          required
        />
        <br />
        <input
          name="Password2"
          onChange={onChange}
          placeholder="비밀번호 재입력"
          value={ps2}
          required
        />
        <br />
        <input
          name="Age"
          onChange={onChange}
          placeholder="나이"
          value={age}
          required
        />
        <br />
        <input
          name="Gender"
          onChange={onChange}
          placeholder="성별"
          value={gender}
          required
        />
        <br />
        <input
          name="Phone"
          onChange={onChange}
          placeholder="전화번호"
          value={phone}
          required
        />
        <br />
        <input
          name="Major"
          onChange={onChange}
          placeholder="전공"
          value={major}
          required
        />
        <br />
        <input
          name="Realname"
          onChange={onChange}
          placeholder="이름"
          value={real}
          required
        />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
export default RegisterUser;