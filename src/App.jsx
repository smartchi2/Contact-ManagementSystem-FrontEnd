import React from 'react';
import { Footer} from './components';
import './App.css'
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Home/Login';
import Register from './components/Home/Register'
import AddContacts from './components/contacts/AddContacts';
import About from './components/about/About'
import ContactUs from './components/contactUs/ContactUs';

const App = () =>{
  return(
  <div>
    <BrowserRouter>
      <Routes>
        <Route >
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addContacts" element={<AddContacts/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact_us" element={<ContactUs />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer />

  </div>
 
  )
}

export default App
