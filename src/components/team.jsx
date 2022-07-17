import team1 from '../assets/images/team-1.jpg'
import team2 from '../assets/images/team-2.jpg'
import team3 from '../assets/images/team-3.jpg'
import team5 from '../assets/images/team-5.jpg'

const Team = ()=>{
  return (
    <>
    <section id="team" className="team_area bg-gray pt-120 pb-120">
      <div className="container">
          <div className="row justify-center">
              <div className="w-full lg:w-1/2">
                  <div className="section_title text-center pb-6">
                      <h5 className="sub_title">Team</h5>
                      <h4 className="main_title">Meet Our Team Members</h4>
                  </div>
              </div>
          </div>
          <div className="team-wrapper relative">
              <div className="row team_active">
                  <div className="w-full lg:w-4/12">
                      <div className="single_team_item mx-auto">
                          <div className="single_team mx-3">
                              <div className="team_image relative">
                                  <img src={team1} alt="team" className="w-full" />
                                  <ul className="social absolute top-4 right-8">
                                      <li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
                                      <li><a href="#"><i className="lni lni-twitter-filled"></i></a></li>
                                      <li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
                                  </ul>
                              </div>
                              <div className="team_content py-5 px-8 relative">
                                  <h4 className="team_name text-xl md:text-2xl"><a href="#" className="text-black group-hover:text-white">Chris Dave</a></h4>
                                  <p className="mt-2 transition-all duration-300 group-hover:text-white">Founder and CEO</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="w-full lg:w-4/12">
                      <div className="single_team_item mx-auto">
                          <div className="single_team mx-3">
                              <div className="team_image relative">
                                  <img src={team3} alt="team" className="w-full" />
                                  <ul className="social absolute top-4 right-8">
                                      <li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
                                      <li><a href="#"><i className="lni lni-twitter-filled"></i></a></li>
                                      <li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
                                  </ul>
                              </div>
                              <div className="team_content py-5 px-8 relative">
                                  <h4 className="team_name text-xl md:text-2xl"><a href="#" className="text-black group-hover:text-white">Sarah Doe</a></h4>
                                  <p className="mt-2 transition-all duration-300 group-hover:text-white">UI Designer</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="w-full lg:w-4/12">
                      <div className="single_team_item mx-auto">
                          <div className="single_team mx-3">
                              <div className="team_image relative">
                                  <img src={team5} alt="team" className="w-full" />
                                  <ul className="social absolute top-4 right-8">
                                      <li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
                                      <li><a href="#"><i className="lni lni-twitter-filled"></i></a></li>
                                      <li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
                                  </ul>
                              </div>
                              <div className="team_content py-5 px-8 relative">
                                  <h4 className="team_name text-xl md:text-2xl"><a href="#" className="text-black group-hover:text-white">Rob Hope</a></h4>
                                  <p className="mt-2 transition-all duration-300 group-hover:text-white">Dr. Software Engineer</p>
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


export default Team
