import React from 'react';

import './App.scss';
import Header from './components/header/header.component';
import ImageHeader from './components/header-image/header-image.component';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ImageHeader></ImageHeader>
    </div>
  );
}

export default App;
