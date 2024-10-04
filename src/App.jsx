import { useState } from 'react';
import './App.css'
import { Child } from './components/Child';
import { FourthComponent } from './components/FourthComponent';
// import { FirstComponent } from './components/FirstComponent'
// import { SecondComponent } from './components/SecondComponent'
// import { ThirdComponent } from './components/ThirdComponent'


function App() {
  const [name,setName]= useState('Lina');
  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <hr className='white-hr'/>
          <FourthComponent />
          <hr className='white-hr'/>
          <Child name = {name} setName={setName}/>
          <hr />
        </header>
      </div>
    </>
  )

}

// Variable de estado -> useState -> Se tiene que usar un metodo que me permita asiganarle valores a esa variable


export default App
