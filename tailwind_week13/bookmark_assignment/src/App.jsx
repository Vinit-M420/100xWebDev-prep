import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { TabSwitching } from './components/TabSwitching'
import { Download, DownloadBtn } from './components/Download'
import { FAQ, MostFAQ } from './components/FAQ'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Features />
      <TabSwitching />
      <Download />
      <DownloadBtn />
      <FAQ />
      <MostFAQ />
    </>
  )
}

export default App
