
// import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)




// const root = createRoot(document.getElementById('root'));
// root.render(<App />);