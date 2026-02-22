import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Intro from './components/ui/HomePage/Intro'
import Features from './components/ui/HomePage/Features'
import ExpenseCalculator from './components/ui/HomePage/ExpenseCalculator'
import Brands from './components/ui/HomePage/Brands'
import ApplicationExamples from './components/ui/HomePage/ApplicationExamples'
import DownloadSection from './components/ui/HomePage/DownloadSection'
import FooterSection from './components/ui/HomePage/FooterSection'

export default function App() {
  return(
    <>
      <Intro/>
      <Features/>
      <ExpenseCalculator/>
      <Brands/>
      <ApplicationExamples/>
      <DownloadSection/>
      <FooterSection/>
    </>
  )
}

