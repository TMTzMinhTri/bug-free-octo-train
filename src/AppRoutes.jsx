import { BrowserRouter, Routes, Route } from "react-router-dom";

// import TodoList from "../containers/TodoList";
// import SharePage from "../containers/SharePage";
// import NoMatch from "../containers/NoMatch";
// import RequireAuth from "../containers/RequireAuth";
// import EmailActionHandler from "../containers/auth/ForgetPassword";
// import Register from "../containers/auth/Register";
import BaseLayout from "./layout/BaseLayout";
import LoginPage from "./pages/Auth/LoginPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path="/" element={<HomePage />} />
          {/* <Route
            path="share"
            element={
              <RequireAuth>
                <SharePage />
              </RequireAuth>
            }
          /> */}
        </Route>
        <Route path="/auth" element={<BaseLayout />}>
          <Route path="login" element={<LoginPage />} />
          {/* <Route path="register" element={<Register />} /> */}
          {/* <Route path="handler/:mode" element={<EmailActionHandler />} /> */}
        </Route>
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
