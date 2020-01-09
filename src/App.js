import React from 'react';
import logo from './logo.svg';
import './App.css';
import Booklist from './components/Booklist';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Booklist />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
