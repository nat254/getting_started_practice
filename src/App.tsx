import React from 'react';
import './App.css';
import MyButton from './component/MyButton';
import AboutPage from './component/AboutPage';
import Profile from './component/Profile';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Natalie's App</h1>
      <MyButton />
      <AboutPage />
      <Profile />
    </div>
  );
}

export default App;
