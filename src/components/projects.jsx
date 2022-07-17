import work1 from '../assets/images/work-1.jpg'
import work2 from '../assets/images/work-2.jpg'
import work3 from '../assets/images/work-3.jpg'
import work4 from '../assets/images/work-4.jpg'
import work5 from '../assets/images/work-5.jpg'



const Projects = ()=>{
  return (
    <>
    <section id="work" className="work_area bg-gray pt-120 pb-120">
        <div className="container">
            <div className="row justify-center">
                <div className="w-ull lg:w-1/2">
                    <div className="section_title text-center pb-6">
                        <h5 className="sub_title">Works</h5>
                        <h4 className="main_title">Some of Our Recent Works</h4>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="work_wrapper relative">
                <div className="flex flex-row justify-center">


                    <div className="w-full lg:w-3/12">
                        <div className="single_item mx-auto">
                            <div className="single_work mx-3">
                                <div className="work_image">
                                    <img src={work1} alt="work" className="w-full" />
                                </div>
                                <div className="work_content">
                                    <a href="#" className="arrow"><i className="lni lni-chevron-right"></i></a>
                                    <h4 className="work_title text-xl md:text-2xl"><a href="#">Web Development</a></h4>
                                    <p className="mt-2">MERN,ReactJS,Django,Laravel</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-3/12">
                        <div className="single_item mx-auto">
                            <div className="single_work mx-3">
                                <div className="work_image">
                                    <img src={work2} alt="work" className="w-full" />
                                </div>
                                <div className="work_content">
                                    <a href="#" className="arrow"><i className="lni lni-chevron-right"></i></a>
                                    <h4 className="work_title text-xl md:text-2xl"><a href="#">Mobile App</a></h4>
                                    <p className="mt-2">Flutter,Java and Laravel</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-3/12">
                        <div className="single_item mx-auto">
                            <div className="single_work mx-3">
                                <div className="work_image">
                                    <img src={work3} alt="work" className="w-full" />
                                </div>
                                <div className="work_content">
                                    <a href="#" className="arrow"><i className="lni lni-chevron-right"></i></a>
                                    <h4 className="work_title text-xl md:text-2xl"><a href="#">Web Design</a></h4>
                                    <p className="mt-2">GrayGrids</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default Projects;
