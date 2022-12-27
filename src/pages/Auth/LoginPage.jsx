import { Button, Form, FormGroup, Input, Label, Row } from "reactstrap";
import AuthWrapper from "./components/AuthWrapper";

const LoginPage = () => {
  return (
    <AuthWrapper>
      <Form>
        <FormGroup floating>
          <Input
            id="email"
            name="email"
            autoComplete="email"
            placeholder="Email"
            type="email"
          />
          <Label for="email">Email</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            id="password"
            autoComplete="current-password"
            name="password"
            placeholder="Password"
            type="password"
          />
          <Label for="password">Password</Label>
        </FormGroup>{" "}
        <Button block color="primary">
          Login
        </Button>
      </Form>
    </AuthWrapper>
  );
};

export default LoginPage;
