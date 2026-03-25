
import { Suspense } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import PricingOptions from './Components/PricingOptions/PricingOptions'
import ResultsChart from './Components/ResultsChart/ResultsChart';

const pricingPromise = fetch('PricingData.json').then(res => res.json());


function App() {

  return (
    <>
     <header>
      <NavBar></NavBar>
     </header>

     <main>
      <Suspense>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>

      <ResultsChart></ResultsChart>
     </main>
     


    </>
  )
}

export default App
