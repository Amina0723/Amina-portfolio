
import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';



// function App() {

// //   // <>(angle brackets->fragments)
//   return (

//  onepagewebsite
// import {BrowserRouter , Routes, Route } from "react-router-dom";
// import Navbar from './Onepagewebsite/Navbar';
// import Home from './Onepagewebsite/Home';
// import AboutUs from './Onepagewebsite/AboutUs';
// import ImageGallery from './Onepagewebsite/ImageGallery';
// import OurServices from './Onepagewebsite/OurServices';
// import OurTeam from './Onepagewebsite/Team';
// import ContactUs from './Onepagewebsite/ContactUs';
// import Footer from './Onepagewebsite/Footer';
// function App() {
//   //   // <>(angle brackets->fragments)
//     return (
//   <>
//      <BrowserRouter>
//      <Navbar />
//      <Routes>
//        <Route path='/' element = {<Home/>}/>
//        <Route path='/about' element = {<AboutUs/>}/>
//        <Route path='/image' element = {<ImageGallery/>}/>
//           <Route path= '/services' element = {<OurServices/>}/>
//       <Route path= '/team' element = {<OurTeam/>}/>
//        <Route path= '/contact' element = {<ContactUs/>}/>
//        <Route path= '/footer' element = {<Footer/>}/>
//        </Routes>
  
//   </BrowserRouter>
//   </>
   
    //portfolio  

//     import Navbar from './Portfolio/Navbar';
// import Hero from './Portfolio/Hero';
// import Hero1 from './Portfolio/Hero1';
// import Hero2 from './Portfolio/Hero2';
// import Hero3 from './Portfolio/Hero3';
// function App() {

//   //   // <>(angle brackets->fragments)
//     return (
//     <>             
//     <div><Navbar/></div>
//     <div><Hero/></div>
//     <div><Hero1/></div>
//     <div><Hero2/></div>
//     <div><Hero3/></div>
    
//     </> 
    
// Birthdays
// import Parent from './Project1/Parent';
// function App() {

//     // <>(angle brackets->fragments)
//     return (
//  <>
// <div><Parent/></div>
// </> 

//Website1

// import {BrowserRouter , Routes, Route } from "react-router-dom";
// import Navbar from './Website1/Navbar';
// import Home from './Website1/Home';
// import AboutUs from './Website1/AboutUs';
// import Services from './Website1/Services';
// import Team from './Website1/Team';
// import Contact from './Website1/Contact';
// import Footer from './Website1/Footer';

// function App() {

//   //   // <>(angle brackets->fragments)
//     return (
//  <>
// <BrowserRouter>
//       <Navbar />
//       <Routes>
//        <Route path='/' element = {<Home/>}/>
//         <Route path='/about' element = {<AboutUs/>}/>
//            <Route path= '/services' element = {<Services/>}/>
//        <Route path= '/team' element = {<Team/>}/>
//         <Route path= '/contact' element = {<Contact/>}/>
//        <Route path= '/footer' element = {<Footer/>}/>
//        </Routes>
  
//    </BrowserRouter>



// </> 

//myportfolio


import Navbar from './Myportfolio/Navbar';
import CursorSparkleTrail from './Myportfolio/CursorSparkleTrail';
import Hero from './Myportfolio/Hero';
import About from './Myportfolio/About';
import Projects from './Myportfolio/Projects';
import Contact from './Myportfolio/Contact';
import Footer from './Myportfolio/Footer';
import MyEducation from './Myportfolio/MyEducation';

function App() {
  return (
    <div className="font-sans  text-black min-h-screen">
      <Navbar />
      <CursorSparkleTrail />

      <section id="home" className="scroll-mt-20">
        <Hero />
      </section>

      <section id="about" className="scroll-mt-20">
        <About />
      </section>
      <section id="myEducation" className="scroll-mt-20">
  <MyEducation />
</section>


      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>

      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
      <Footer/>
    </div>







       
      

// function App() {

//   //   // <>(angle brackets->fragments)
//     return (
//    <>
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/update" element={<Updateusers />} />
//       <Route path="/add" element={<Addusers />} />
//     </Routes>
//   </BrowserRouter>
//   </>





// export default App;








// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Addusers from './CRUD/Addusers';
// import Updateusers from './CRUD/Updateusers';
// import Getuser from './CRUD/Getuser'; // Assuming Home is the Getuser page


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Getuser />} /> {/* Replaced Getuser with Home */}
//         <Route path="/Addusers" element={<Addusers />} />
//         <Route path="/Updateusers/:id" element={<Updateusers />} />
//       </Routes>
//     </BrowserRouter>
  


//  import Home from './CRUD/Home';
//  import Updateusers from './CRUD/Updateusers';
// import Addusers from './CRUD/Addusers';
//  function App() {

// //   //   // <>(angle brackets->fragments)
//      return (
//  <>
//  <div><Home/></div>
//      {/* <div><Updateusers/></div>
//      <div><Addusers/></div> */}
// </> 

// import EnquiryForm from './EnquiryForm/EnquiryForm.jsx';

// function App() {
//   return (
//     <div>
//       <EnquiryForm />
//     </div>
  );
}


export default App;
