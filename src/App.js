import React from 'react';
import Button from "./ui/Button.js";
import { FaCoffee } from 'react-icons/fa';

const App = () => {
  return (
    <>
      <Button className="mx-7 my-4" size="large" variant="primary" borderRadius="rounded-sm" icon={FaCoffee} iconPosition="left" enabled={true}  loading={true} >
        Primary
      </Button>
      <Button className="mx-7 my-4" textColor="red" size="large" variant="secondary" borderRadius="rounded-xs" icon={FaCoffee} iconPosition="right" enabled={true} hoverEffect="fill-left-to-right">
        Secondary
      </Button>
      <Button className="mx-7 my-4" size="large" variant="success" borderRadius="rounded-lg" enabled={true} hoverEffect="scale">
        Success
      </Button>
      <Button className="mx-7 my-4" size="large" variant="danger" borderRadius="rounded-md" enabled={true}   >
        Danger
      </Button>
      <Button className="mx-7 my-4" size="large" variant="warning" borderRadius="rounded-full" enabled={true}   >
        Warning
      </Button>
      <Button className="mx-7 my-4" size="large" variant="info" borderRadius="rounded-none" enabled={true}   >
        Info
      </Button>
      <Button className="mx-7 my-4" size="large" variant="light" borderRadius="rounded-lg" enabled={true}   >
        Light
      </Button>
      <Button className="mx-7 my-4" size="large" variant="dark" borderRadius="rounded-lg" enabled={true}   >
        Dark
      </Button>
      <Button className="mx-7 my-4" size="large" variant="outline" borderRadius="rounded-lg" enabled={true}   >
        Outline
      </Button>
      <Button className="mx-7 my-4" size="large" variant="gradient" gradient borderRadius="rounded-md" enabled={true}   >
        Gradient
      </Button>
      <Button className="mx-7 my-4" customWidth="200px" customHeight="60px" borderRadius="rounded-full" variant="primary" icon={FaCoffee} iconPosition="left" enabled={true} hoverText="Hovered">
        Not Hover
      </Button>
    </>
  );
};

export default App;





// import React from 'react'

// import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
// import { CTA, Brand, Navbar } from './components';

// import './App.css';
// import SupportEngine from './SupportEngine';

// const App = () => (
//   <div className="App">
//     <div className="gradient__bg">
//       <Navbar />
//       <Header />
//     </div>
//     <Brand />
//     <WhatGPT3 />
//     <Features />
//     <Possibility />
//     <CTA />
//     <Blog />
//     <Footer />
//   <SupportEngine />
//   </div>
// );

// export default App;