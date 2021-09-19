import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//for redux
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

//Material UI Theming
import ThemeProvider from './theme/ThemeProvider';
import { defaultTheme } from './theme/Theme'

//Toaster
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

export const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

