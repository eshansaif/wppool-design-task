import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#E6E6E6] p-8 text-gray-800">
      <div className="max-w-screen-9xl mx-auto flex flex-col md:flex-row justify-between space-x-0 md:space-x-32">
        <div className="md:w-1/3 w-full mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold mb-4">
            Experience remarkable WordPress products with a new level of power,
            beauty, and human-centered designs.
          </h2>
          <div>
            <p className="text-xs text-gray-600">©2024</p>
            <nav className="text-sm text-gray-600">
              <a href="#" className="hover:underline mr-4">
                Terms of Use
              </a>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </nav>
            <p className="mt-4 text-xs text-gray-600 max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaera.
            </p>
          </div>
        </div>

        <div className="mb-8 w-full md:w-1/3 flex-grow flex flex-col md:items-center">
          <h3 className="text-lg font-semibold mb-4">Jump to</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline text-blue-600">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-blue-600">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-blue-600">
                News
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-blue-600">
                Stories
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-blue-600">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-blue-600">
                About Us
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/3 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">Cambridge</h3>
            <address className="not-italic">
              70728 Yost Burg,
              <br />
              North Magdaleneview, UT 97952-2814
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">London</h3>
            <address className="not-italic">
              Suite 292 903 Stehr Streets,
              <br />
              Langworthtown, SC 94577-9465
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">San Francisco</h3>
            <address className="not-italic">
              19837 Gilberto Lodge,
              <br />
              Lake Kendallville, Colorado - 97392, Bhutan
            </address>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <img src="social/linkedin.png" alt="" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <img src="social/twitter.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
