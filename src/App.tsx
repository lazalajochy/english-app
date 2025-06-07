
import { GoogleOAuthProvider } from '@react-oauth/google';

import { MainRoute } from './routes/MainRoute';

function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <MainRoute />
    </GoogleOAuthProvider>
  );
}

export default App;