
import reactDOM from 'react-dom';

import "./index.css"
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'
import { StateProvider } from './context/StateProvider';
import reducer from './context/reducer';
import { initialState } from './context/initialState';
/* 5:08:10 */

reactDOM.render(
    <Router>
        <StateProvider initialState={initialState} reducer={reducer}>
             <App />
        </StateProvider>
    
    </Router>

, document.getElementById("root"))
 