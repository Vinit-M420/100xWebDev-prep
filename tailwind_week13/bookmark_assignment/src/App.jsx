import { useState, useRef } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { TabSwitching } from './components/TabSwitching'
import { Download, DownloadBtn } from './components/Download'
import { FAQ, MostFAQ } from './components/FAQ'
import { EmailBanner } from './components/EmailBanner'
import { Footer } from './components/Footer'

function App() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <body>
      <Header scrollToRef={scrollToRef} featuresRef={ref2} downloadRef={ref3} faqRef={ref4} />

      <div ref={ref1}>
          <Hero />
      </div>

      <div ref={ref2}>
        <Features />
        <TabSwitching />
      </div>

      <div ref={ref3}>
        <Download />
        <DownloadBtn />
      </div>
      <div ref={ref4}>
        <FAQ />
        <MostFAQ />
      </div>
      <EmailBanner />
      
      <Footer scrollToRef={scrollToRef} featuresRef={ref2} downloadRef={ref3} faqRef={ref4} />
    </body>
  )
}

export default App
