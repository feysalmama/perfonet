
import blog1  from '../assets/images/blog-1.jpg'
import blog2  from '../assets/images/blog-2.jpg'
import blog3  from '../assets/images/blog-3.jpg'
const Blogs = () => {
  return (
    <>
        <section id="blog" className="blog_area pt-120">
          <div className="container">
              <div className="row justify-center">
                  <div className="w-full lg:w-1/2">
                      <div className="section_title text-center pb-6">
                          <h5 className="sub_title">Blog</h5>
                          <h4 className="main_title">From The Blog</h4>
                      </div>
                  </div>
              </div>
              <div className="row justify-center lg:justify-start">
                  <div className="w-full md:w-8/12 lg:w-6/12 xl:w-4/12">
                      <div className="single_blog mx-3 mt-8 rounded-xl bg-white transition-all duration-300 overflow-hidden hover:shadow-lg">
                          <div className="blog_image">
                              <img src={blog1} alt="blog" className="w-full" />
                          </div>
                          <div className="blog_content p-4 md:p-5">
                              <ul className="blog_meta flex justify-between">
                                  <li className="text-body-color text-sm md:text-base">By: <a href="#" className="text-body-color hover:text-theme-color">Musharof Chowdury</a></li>
                                  <li className="text-body-color text-sm md:text-base">15 June 2024</li>
                              </ul>
                              <h3 className="blog_title"><a href="#">How to track your business revenue</a></h3>
                              <a href="#" className="more_btn">Read More</a>
                          </div>
                      </div>
                  </div>
                  <div className="w-full md:w-8/12 lg:w-6/12 xl:w-4/12">
                      <div className="single_blog mx-3 mt-8 rounded-xl bg-white transition-all duration-300 overflow-hidden hover:shadow-lg">
                          <div className="blog_image">
                              <img src={blog2}  alt="blog" className="w-full" />
                          </div>
                          <div className="blog_content p-4 md:p-5">
                              <ul className="blog_meta flex justify-between">
                                  <li className="text-body-color text-sm md:text-base">By: <a href="#" className="text-body-color hover:text-theme-color">Musharof Chowdury</a></li>
                                  <li className="text-body-color text-sm md:text-base">15 June 2024</li>
                              </ul>
                              <h3 className="blog_title"><a href="#">Improving products depending on feedback</a></h3>
                              <a href="#" className="more_btn">Read More</a>
                          </div>
                      </div>
                  </div>
                  <div className="w-full md:w-8/12 lg:w-6/12 xl:w-4/12">
                      <div className="single_blog mx-3 mt-8 rounded-xl bg-white transition-all duration-300 overflow-hidden hover:shadow-lg">
                          <div className="blog_image">
                              <img src={blog3}  alt="blog" className="w-full" />
                          </div>
                          <div className="blog_content p-4 md:p-5">
                              <ul className="blog_meta flex justify-between">
                                  <li className="text-body-color text-sm md:text-base">By: <a href="#" className="text-body-color hover:text-theme-color">Musharof Chowdury</a></li>
                                  <li className="text-body-color text-sm md:text-base">15 June 2024</li>
                              </ul>
                              <h3 className="blog_title"><a href="#">How to diversify your audience</a></h3>
                              <a href="#" className="more_btn">Read More</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
export default Blogs
