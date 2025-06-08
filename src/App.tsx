
import { GoogleOAuthProvider } from '@react-oauth/google';

import { MainRoute } from './routes/MainRoute';

function App() {
  return (
    <GoogleOAuthProvider clientId="1044435155755-s32q81p9sho3nsi32r6mn7n16g16p39k.apps.googleusercontent.com">
      <MainRoute />
    </GoogleOAuthProvider>
  );
}

export default App;