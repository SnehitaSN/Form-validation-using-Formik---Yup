import React from "react";
import { useFormik } from "formik";
import formSchema from "./formValidation.js";
import "./App.css";

function App() {
  const formik = useFormik({
    initialValues: { username: "", email: "", password: "" },
    onSubmit: function () {
      console.log("data");
    },
    validationSchema: formSchema,
    validate: function (data) {
      console.log(data);
      let errors = {};

      if (!data.username) {
        errors.username = "username is required";
      }
      if (!data.email) {
        errors.email = "email is required";
      }
      if (!data.password) {
        errors.password = "password is required";
      }
      return errors;
    },
    //the below code for using validation with formik
    // validate:function(data){
    //   console.log(data)
    //   let errors ={}

    //   if(!data.username){
    //     errors.erro1 = "username is required"
    //   }
    //   if(!data.email){
    //     errors.error2 = "email is required"
    //   }
    //   if(!data.password){
    //     errors.error3="password is required"
    //   }
    //   return errors
    // }
  });

  return (
    <div className="App">
      <h1>Forms</h1>
      <form method="POST" onSubmit={formik.handleSubmit}>
        <label>User Name:</label>
        <input
          type="text"
          value={formik.values.username}
          name="username"
          onChange={formik.handleChange}
        />
        <br></br>
        <br></br>
        {/* {formik.errors.erro1 ? <h3>{formik.errors.erro1}</h3> : null} */}
        {formik.errors.username ? <h3>{formik.errors.username}</h3> : null}

        <label>Email Id:</label>
        <input
          type="email"
          value={formik.values.email}
          name="email"
          onChange={formik.handleChange}
        />
        <br></br>
        <br></br>
        {/* {formik.errors.error2 ? <h3>{formik.errors.error2}</h3> :null} */}
          {formik.errors.email ? <h3>{formik.errors.email}</h3> :null}

        <label>Password:</label>
        <input
          type="password"
          value={formik.values.password}
          name="password"
          onChange={formik.handleChange}
        />
        <br></br>
        <br></br>
        {/* {formik.errors.error3 ? <h3>{formik.errors.error3}</h3> :null } */}
         {formik.errors.password ? <h3>{formik.errors.password}</h3> :null }

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
