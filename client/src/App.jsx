import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./Context/AuthProvider";
import Routes from "./Routes";

const App = () => {
  return (
    <AuthProvider>
      <ToastContainer />
      <Routes />
    </AuthProvider>
  );
};

export default App;
