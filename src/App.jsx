import ButtonGradient from './assets/svg/ButtonGradient';
import Benifits from './components/Benifits';
import Collaboration from './components/Collaboration';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';

const App = () => {
 
  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.75rem] overflow-hidden'>
        <Header/>
        <Hero/>
        <Benifits/>
        <Collaboration/>
        <Services/>
        <Footer/>
      </div>
      <ButtonGradient />
    </>
  )
}

export default App
