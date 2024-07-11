import React from "react";

const StoriesAndIdeas = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Stories & Ideas
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            The latest news and updates
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
          <div className="bg-white shadow-lg rounded-lg">
            <div className="relative p-4">
              <img
                className="h-32 w-32  object-cover absolute -top-10 left-4 z-10"
                src="ideas/author1.png"
                alt="Author 1"
              />
            </div>
            <div className="pt-16 px-4 pb-4">
              <p className="text-[#2042B6] font-semibold">By: Nayeem Khan</p>
              <p className="mt-1 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia.
              </p>
              <button className="mt-2 text-white bg-[#2042B6] hover:bg-blue-700 px-3 py-1 rounded-full">
                Read More
              </button>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg">
            <div className="relative p-4">
              <img
                className="h-32 w-32  object-cover absolute -top-10 left-4 z-10"
                src="ideas/author2.png"
                alt="Author 1"
              />
            </div>
            <div className="pt-16 px-4 pb-4">
              <p className="text-[#2042B6] font-semibold">
                By: Sahabuddin Sagor
              </p>
              <p className="mt-1 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia.
              </p>
              <button className="mt-2 text-white bg-[#2042B6] hover:bg-blue-700 px-3 py-1 rounded-full">
                Read More
              </button>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg">
            <div className="relative p-4">
              <img
                className="h-32 w-32  object-cover absolute -top-10 left-4 z-10"
                src="ideas/author1.png"
                alt="Author 1"
              />
            </div>
            <div className="pt-16 px-4 pb-4">
              <p className="text-[#2042B6] font-semibold">
                By: Sahabuddin Sagor
              </p>
              <p className="mt-1 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia.
              </p>
              <button className="mt-2 text-white bg-[#2042B6] hover:bg-blue-700 px-3 py-1 rounded-full">
                Read More
              </button>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg">
            <div className="relative p-4">
              <img
                className="h-32 w-32  object-cover absolute -top-10 left-4 z-10"
                src="ideas/author1.png"
                alt="Author 1"
              />
            </div>
            <div className="pt-16 px-4 pb-4">
              <p className="text-[#2042B6] font-semibold">
                By: Sahabuddin Sagor
              </p>
              <p className="mt-1 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia.
              </p>
              <button className="mt-2 text-white bg-[#2042B6] hover:bg-blue-700 px-3 py-1 rounded-full">
                Read More
              </button>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg">
            <div className="relative p-4">
              <img
                className="h-32 w-32  object-cover absolute -top-10 left-4 z-10"
                src="ideas/author2.png"
                alt="Author 1"
              />
            </div>
            <div className="pt-16 px-4 pb-4">
              <p className="text-[#2042B6] font-semibold">
                By: Sahabuddin Sagor
              </p>
              <p className="mt-1 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia.
              </p>
              <button className="mt-2 text-white bg-[#2042B6] hover:bg-blue-700 px-3 py-1 rounded-full">
                Read More
              </button>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg">
            <div className="relative p-4">
              <img
                className="h-32 w-32  object-cover absolute -top-10 left-4 z-10"
                src="ideas/author1.png"
                alt="Author 1"
              />
            </div>
            <div className="pt-16 px-4 pb-4">
              <p className="text-[#2042B6] font-semibold">
                By: Sahabuddin Sagor
              </p>
              <p className="mt-1 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia.
              </p>
              <button className="mt-2 text-white bg-[#2042B6] hover:bg-blue-700 px-3 py-1 rounded-full">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesAndIdeas;
