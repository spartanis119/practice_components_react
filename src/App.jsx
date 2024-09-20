import { useState } from 'react';
import './App.css'
import { Child } from './components/Child';
import { FirstComponent } from './components/FirstComponent'
import { SecondComponent } from './components/SecondComponent'
import { ThirdComponent } from './components/ThirdComponent'


function App() {
  const [name,setName]= useState('Lina');
  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <h1>Fundamentos de React</h1>
          <hr className='white-hr'/>
          <FirstComponent />
          <hr className='white-hr'/>
          <SecondComponent />
          <hr />
          <ThirdComponent  name="Juan" lastname="Camargo" age="15"/>
          <hr />
          <Child name = {name} setName={setName}/>
        </header>
      </div>
    </>
  )

}

// Variable de estado -> useState -> Se tiene que usar un metodo que me permita asiganarle valores a esa variable


export default App
