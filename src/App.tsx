
import { GoogleOAuthProvider } from '@react-oauth/google';

import { MainRoute } from './routes/MainRoute';

function App() {
  return (
    <GoogleOAuthProvider clientId="881936334520-pv1s2id845gef178essfns651m2r2mp0.apps.googleusercontent.com">
      <MainRoute />
    </GoogleOAuthProvider>
  );
}

export default App;