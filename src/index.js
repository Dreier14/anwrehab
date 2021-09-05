import React from 'react';
import ReactDOM from 'react-dom';import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
// import {PersistGate} from 'redux-persist/integration/react';
import GetStore from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const { store, persistor } = GetStore();

ReactDOM.render(
<Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    {/* </PersistGate> */}
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
