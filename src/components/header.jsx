import logo from '../assets/images/perfonet-logo.jpg'

const Header = ()=> {
  return (
    <>
          <div className="preloader">
              <div className="loader">
                  <div className="ytp-spinner">
                      <div className="ytp-spinner-container">
                          <div className="ytp-spinner-rotator">
                              <div className="ytp-spinner-left">
                                  <div className="ytp-spinner-circle"></div>
                              </div>
                              <div className="ytp-spinner-right">
                                  <div className="ytp-spinner-circle"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

              <div className="navbar-area bg-white">
                <div className="container relative">
                    <div className="row items-center">
                        <div className="w-full">
                            <nav className="flex items-center justify-between py-4 navbar navbar-expand-lg">
                                <a className="navbar-brand mr-5" href="/">
                                    <img src={logo} alt="Logo" className="w-48"/>
                                </a>
                                <button className="block navbar-toggler focus:outline-none lg:hidden" type="button" data-toggle="collapse" data-target="#navbarOne" aria-controls="navbarOne" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                </button>

                                <div className="absolute left-0 z-20 hidden w-full px-5 py-3 duration-300 bg-white lg:w-auto collapse navbar-collapse lg:block top-full mt-full lg:static lg:bg-transparent shadow lg:shadow-none" id="navbarOne">
                                    <ul id="nav" className="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex">
                                        <li className="nav-item ml-5 lg:ml-11">
                                            <a className="page-scroll active" href="#home">Home</a>
                                        </li>
                                        <li className="nav-item ml-5 lg:ml-11">
                                            <a className="page-scroll" href="#about">About</a>
                                        </li>
                                        <li className="nav-item ml-5 lg:ml-11">
                                            <a className="page-scroll" href="#services">Services</a>
                                        </li>
                                        <li className="nav-item ml-5 lg:ml-11">
                                            <a className="page-scroll" href="#work">Projects</a>
                                        </li>
                                      
                                        <li className="nav-item ml-5 lg:ml-11">
                                            <a className="page-scroll" href="#blog">Blog</a>
                                        </li>
                                        <li className="nav-item ml-5 lg:ml-11">
                                            <a className="page-scroll" href="#contact">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

    </>
  );
}

export default Header;
