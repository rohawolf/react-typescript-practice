// import React from 'react';
import './App.css';
import Hello from './hello';

const App: React.FC = () => {
  return (
    <div className="container">
      <Hello 
        name='Mark' 
        enthusiasmLevel={2} 
      />
    </div>
  );
}

export default App;
