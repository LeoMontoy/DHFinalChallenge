import React from 'react';
import ReactDOM from 'react-dom/client';
import SideBar from './Components/SideBar';
import './assets/css/App.css';
import ContentWrapper from './Components/ContentWrapper';
import List from './Components/lista';
import LastProd from './Components/LastProd';
import Brand from './Components/Brand';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div id="wrapper">
    <SideBar />
    <ul>
      <li><ContentWrapper /></li>
      <li>
        <span>
        <LastProd />
        <Brand />
        </span>
        
       </li>
    </ul>
    </div>
  </>
)