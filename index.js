import { ColorModeScript } from '@chakra-ui/react';

import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(

  <Router>
 
  <App />


</Router>
);


serviceWorker.unregister();


reportWebVitals();
