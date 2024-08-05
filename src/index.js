import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// import '@cldcvr/flow-lineage/dist/style.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

// Register flow packages
import('@cldcvr/flow-core').then(async () => {
  await import('@cldcvr/flow-lineage');
  // Render your app after packages are loaded
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
