import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function Signup(props) {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchemaForSignup,
    onSubmit: (values) => {
      console.log(values);
      props.setUserName(values.email);
      props.setPassword(values.password);
      props.setConfirmPassword(values.confirmPassword);
      history.push("/");
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <Container maxWidth="sm">
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
          <TextField
            fullWidth
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
          <Button
            style={{
              marginTop: "2rem",
            }}
            color="primary"
            variant="contained"
            type="submit"
          >
            Signup
          </Button>
        </form>
        {/* <Button
          onClick={() => {
            props.history.push("/");
          }}
          style={{
            marginTop: "2rem",
          }}
          variant="contained"
          color="primary"
        >
          Login in
        </Button> */}
      </Container>
    </div>
  );
}

const validationSchemaForSignup = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  confirmPassword: yup
    .string("Confirm your password")
    .test("passwords-match", "Passwords must match.", function (value) {
      return this.parent.password === value;
    }),

  password: yup
    .string("Enter your New Password.")
    .required("New Password is required.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character."
    ),
});
