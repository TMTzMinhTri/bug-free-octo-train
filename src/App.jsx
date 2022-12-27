import AppRoutes from "./AppRoutes";
import AuthenticateProvider from "./providers/AuthenticateProvider";

function App() {
  return (
    <AuthenticateProvider>
      <AppRoutes />
    </AuthenticateProvider>
  );
}

export default App;
