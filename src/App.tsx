import React from 'react';
import './App.css';
import MyButton from './component/MyButton';
import AboutPage from './component/AboutPage';
import Profile from './component/Profile';
import Conditional from './component/Conditional';
import ProductList from './component/ProductList';
import TwoButtonsDemo from './component/TwoButtonsDemo';
import ShareData from './component/ShareData';
import Gallery from './component/Gallery';
import ToDoList from './component/ToDoList';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Natalie's App</h1>
      <MyButton />
      <AboutPage />
      <Profile />
      <Conditional />
      <ProductList />
      <TwoButtonsDemo />
      <ShareData  />
      <Gallery />
      <ToDoList />
    </div>
  );
}

export default App;
