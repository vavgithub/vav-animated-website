import './App.css'
import './assets/fonts/customFonts.css';
import IntroSection from './components/IntroSection';
import SmoothScrollWrapper from './utilities/SmoothScrollWrapper';
import PatternSection from './components/PatternSection';

function App() {
  return (
    <SmoothScrollWrapper>
      <div className='container mx-auto '>
      <IntroSection/>
      <PatternSection/>
      </div>
    </SmoothScrollWrapper>
  )
}

export default App
