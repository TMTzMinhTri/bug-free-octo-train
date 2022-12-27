import { Outlet } from "react-router-dom";
import { Container } from "reactstrap";

const BaseLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};
export default BaseLayout;
