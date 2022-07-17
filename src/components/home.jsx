import shape1 from '../assets/images/shape/shape-1.svg'
import shape2 from '../assets/images/shape/shape-2.svg'
import shape3 from '../assets/images/shape/shape-3.svg'
import shape4 from '../assets/images/shape/shape-4.svg'
import home  from '../assets/images/header-image.svg'
import about  from '../assets/images/about.svg'


const Home = ()=>{
  return(
       <>
       <div id="home" className="header_hero bg-gray relative z-10 overflow-hidden lg:flex items-center">
         <div className="hero_shape shape_1">
             <img src={shape1} alt="shape" />
         </div>
         <div className="hero_shape shape_2">
             <img src={shape2} alt="shape" />
         </div>
         <div className="hero_shape shape_3">
             <img src={shape3} alt="shape" />
         </div>
         <div className="hero_shape shape_4">
             <img src={shape4} alt="shape" />
         </div>
         <div className="hero_shape shape_6">
               <img src={shape1} alt="shape" />
         </div>
         <div className="hero_shape shape_7">
               <img src={shape4} alt="shape" />
         </div>
         <div className="hero_shape shape_8">
             <img src={shape3} alt="shape" />
         </div>
         <div className="hero_shape shape_9">
             <img src={shape2} alt="shape" />
         </div>
         <div className="hero_shape shape_10">
                <img src={shape4} alt="shape" />
         </div>
         <div className="hero_shape shape_11">
               <img src={shape1} alt="shape" />
         </div>
         <div className="hero_shape shape_12">
               <img src={shape2} alt="shape" />
         </div>

         <div className="container">
             <div className="row">
                 <div className="w-full lg:w-1/2">
                     <div className="header_hero_content pt-150 lg:pt-0">
                         <h2 className="hero_title text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold">Creative Multipurpose Tailwind CSS <span className="text-theme-color">Template</span></h2>
                         <p className="mt-8 lg:mr-8">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                         <div className="hero_btn mt-10">
                             <a className="main-btn" href="#0">Get Started</a>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
         <div className="header_shape hidden lg:block"></div>

         <div className="header_image flex items-center">
             <div className="image 2xl:pl-25">
                 <img src={home} alt="Header Image" />
             </div>
         </div>
     </div>


     <section className="services_area pt-120" id="about">
        <div className="container">
            <div className="row justify-center">
                <div className="w-full lg:w-1/2">
                    <div className="section_title text-center pb-6">
                        <h5 className="sub_title">About</h5>
                        <h4 className="main_title">Work Process</h4>
                    </div>
                </div>
            </div>
            <div className="row justify-center">
                <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
                    <div className="single_services text-center mt-8 mx-3">
                        <div className="services_icon">
                            <i className="lni lni-write"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="94" height="92" viewBox="0 0 94 92">
                                <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                            </svg>
                        </div>
                        <div className="services_content mt-5">
                            <h3 className="services_title text-black font-semibold text-xl md:text-3xl">Research</h3>
                            <p className="mt-4">Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores </p>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
                    <div className="single_services text-center mt-8 mx-3">
                        <div className="services_icon">
                            <i className="lni lni-bulb"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="94" height="92" viewBox="0 0 94 92">
                                <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                            </svg>
                        </div>
                        <div className="services_content mt-5">
                            <h3 className="services_title text-black font-semibold text-xl md:text-3xl">Prototype</h3>
                            <p className="mt-4">Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores </p>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
                    <div className="single_services text-center mt-8 mx-3">
                        <div className="services_icon">
                            <i className="lni lni-checkmark-circle"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="94" height="92" viewBox="0 0 94 92">
                                <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                            </svg>
                        </div>
                        <div className="services_content mt-5">
                            <h3 className="services_title text-black font-semibold text-xl md:text-3xl">Build</h3>
                            <p className="mt-4">Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section id="why" className="about_area pt-120 relative">
        <div className="about_image flex items-end justify-end">
            <div className="image lg:pr-13">
                <img src={about} alt="about"/>
            </div>
        </div>
        <div className="container">
            <div className="row justify-end">
                <div className="w-full lg:w-1/2">
                    <div className="about_content mx-4 pt-11 lg:pt-15 lg:pb-15">
                        <div className="section_title pb-9">
                            <h5 className="sub_title">Why Choose Us</h5>
                            <h4 className="main_title">Your Goal is Our Achievement</h4>
                        </div>
                        <p>Nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua. At vero eos et accusam et justo duo dolores et rebum. Stet clita kasd gubergren, no sea takimata sanctus. </p>
                        <ul className="about_list pt-3">
                            <li className="flex mt-5">
                                <div className="about_check">
                                    <i className="lni lni-checkmark-circle"></i>
                                </div>
                                <div className="about_list_content pl-5 pr-2">
                                    <p>Vero eos et accusam et justo duo dolores et rebum. Stet clita kasd gubergrenv</p>
                                </div>
                            </li>
                            <li className="flex mt-5">
                                <div className="about_check">
                                    <i className="lni lni-checkmark-circle"></i>
                                </div>
                                <div className="about_list_content pl-5 pr-2">
                                    <p>At vero eos et accusam et justo duo dolores et rebum. Stet clita kasd gubergrenv</p>
                                </div>
                            </li>
                            <li className="flex mt-5">
                                <div className="about_check">
                                    <i className="lni lni-checkmark-circle"></i>
                                </div>
                                <div className="about_list_content pl-5 pr-2">
                                    <p>Dvero eos et accusam et justo duo dolores et rebum. Stet clita kasd gubergrenv</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
       </>

  );
}

export default Home;
