import "./App.scss";
import AuthContextProvider from "./context/AuthContext";
import Routes from "./pages/Routes";
import "bootstrap/dist/js/bootstrap.bundle";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
      <ToastContainer />
    </>
  );
}

export default App;
