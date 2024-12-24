import './App.css'
import './assets/fonts/customFonts.css';
import IntroSection from './components/IntroSection';
import SmoothScrollWrapper from './utilities/SmoothScrollWrapper';

function App() {

  return (
    <SmoothScrollWrapper>
      <div className=''>
      <IntroSection   />
      </div>
    </SmoothScrollWrapper>
  )
}

export default App
