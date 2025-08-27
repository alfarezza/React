import { useState } from 'react'
import './App.css'
import ModalForm from './components/Modalform'
import NavBar from './components/Navbar'
import TableList from './components/Tablelist'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setmodalMode] = useState('add');

  const handleOpen = () =>{
    setIsOpen(true);
    setmodalMode(mode);
  }

  const handleSubmit = () =>{
    if (modalMode === 'add'){
      console.log('Modal mode Add');
    }else{
      console.log('Modal mode Edit')
    }
  }

  return (
    <>
      <NavBar onOpen = {() => handleOpen('add')}/>
      <TableList handleOpen={handleOpen}/> 
      <ModalForm 
      isOpen={isOpen} OnSubmit={handleSubmit} 
      onClose = {() => setIsOpen(false)} mode={modalMode}/>
    </>
  )
}

export default App
