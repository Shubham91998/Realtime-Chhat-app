import Masanger from "./components/Masanger";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const clientid = '181064028136-lbv2gqtu4vdk0p6c7jks323ig4k02b03.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientid}>

      <Masanger />
      
    </GoogleOAuthProvider>
  );
}

export default App;
