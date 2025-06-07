import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from "./store.ts";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { MainRoute } from './routes/MainRoute';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId="1044435155755-s32q81p9sho3nsi32r6mn7n16g16p39k.apps.googleusercontent.com">
        <MainRoute />
      </GoogleOAuthProvider>
    </Provider>
  </StrictMode>
);