import './App.css';
import Header from './components/header'
import Home from './components/home'
import Services from './components/services'
import Projects from './components/projects'
// import Pricing from './components/pricing'
import Team from './components/team'
import Blogs from './components/blogs'
import ContactAs from './components/contact-us'
import Footer from './components/footer'

import './assets/css/animate.css'
import './assets/css/tiny-slider.css'
import './assets/fonts/lineicons/font-css/LineIcons.css'
import './assets/css/tailwindcss.css'
import './assets/js/tiny-slider.js'
import './assets/js/wow.min.js'
// import './assets/js/main.js'

function App() {
  return (
    <div className="App">
        <section className="header_area">
          <Header />
          <Home/>
        </section>
        <Services/>
        <Projects/>

        <Team/>
        <Blogs/>
        <ContactAs/>
        <Footer/>
    </div>
  );
}

export default App;
