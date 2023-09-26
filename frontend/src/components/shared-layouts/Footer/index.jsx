import "@fortawesome/fontawesome-free/css/all.min.css";
import Logo from "@images/logo.jpg";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-1 bg-palette-dark py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 text-palette-light">
            <h3 className="text-xl font-bold mb-6">Dowload Our App</h3>
            <h5>Downlaod App for Anroid and Ios Mobile</h5>
            <div className="flex  self-center mt-5">
              <img width={100} height={100} src={Logo} alt="logo" />
            </div>
          </div>
          <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto text-palette-light">
            <h6 className="font-bold ml-1 text-4xl md:text-6xl">Ecommerce</h6>
            <h5 className="mt-4">High Quality is our first priority</h5>
            <h5 className="mt-4">Copyrights 2023 &copy; Prathamesh Gonjari</h5>
          </div>
          <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto text-palette-light">
            <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">
              Follow Us
            </h5>
            <div className="flex sm:justify-center xl:justify-start">
              <Link
                to="https://in.linkedin.com/in/prathamesh-gonjari-02280a1a5"
                className="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600"
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link
                to="https://www.facebook.com/prathamesh.gonjari"
                className="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400"
              >
                <i className="fab fa-facebook"></i>
              </Link>
              <Link
                to="https://www.google.com/search?q=prathamesh+gonjari&sca_esv=568031865&sxsrf=AM9HkKlexxoks983dZYsBKcAFO7-a1EpbA:1695581672146&ei=6IUQZZfJCMrp-Aatua3wCg&ved=0ahUKEwiX3YX69cOBAxXKNN4KHa1cC64Q4dUDCBA&uact=5&oq=prathamesh+gonjari&gs_lp=Egxnd3Mtd2l6LXNlcnAiEnByYXRoYW1lc2ggZ29uamFyaTIEECMYJ0jFB1DJBVjJBXACeACQAQCYAd0BoAHdAaoBAzItMbgBA8gBAPgBAcICCBAAGKIEGLAD4gMEGAEgQYgGAZAGAQ&sclient=gws-wiz-serp"
                className="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600"
              >
                <i className="fab fa-google-plus-g"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
