import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function Login(props) {
  // using history from react-router-dom to get and change components as per our state
  const history = useHistory();
  //using formik for for validation and froms
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(props);
      if (
        values.email === props.userName &&
        values.password === props.password
      ) {
        props.setIsLoggedIn(true);
        history.push("/home");
      } else {
        alert("Password or username is incorrect");
      }
    },
  });

  return (
    <div>
      <Container maxWidth="xs">
        <form style={{ marginTop: "6rem" }} onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            color="primary"
            variant="contained"
            style={{
              marginTop: "2rem",
            }}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
}

// Field level validation

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required("Password is required"),
});
