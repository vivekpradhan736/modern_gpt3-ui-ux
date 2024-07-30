import React from 'react'

// import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
// import { CTA, Brand, Navbar } from './components';

// import './App.css';
// import SupportEngine from './SupportEngine';

import Button from "./ui/Button.js";

const App = () => (
  <>
  <Button size="large" variant="primary" borderRadius="rounded-sm">Primary</Button>
      <Button size="large" variant="secondary" borderRadius="rounded-xs">Secondary</Button>
      <Button size="large" variant="success" borderRadius="rounded-lg">Success</Button>
      <Button size="large" variant="danger" borderRadius="rounded-md">Danger</Button>
      <Button size="large" variant="warning" borderRadius="rounded-full">Warning</Button>
      <Button size="large" variant="info" borderRadius="rounded-none">Info</Button>
      <Button size="large" variant="light" borderRadius="rounded-lg">Light</Button>
      <Button size="large" variant="dark" borderRadius="rounded-lg">Dark</Button>
      <Button size="large" variant="outline" borderRadius="rounded-lg">Outline</Button>
      <Button size="large" variant="gradient" gradient borderRadius="rounded-md">Gradient</Button>
      <Button customWidth="200px" customHeight="60px" borderRadius="rounded-full" variant="primary">Custom Size</Button>
  {/* <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  <SupportEngine />
  </div> */}
  </>
);

export default App;