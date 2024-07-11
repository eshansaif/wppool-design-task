import React from "react";

const PotentialListings = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 text-left">
            Potential Future Listings
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600 text-left">
            Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. <br />{" "}
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
          <div className="flex justify-center bg-white px-12 py-12 rounded-md">
            <img
              className="h-12"
              src="potential_listings/stripe.png"
              alt="Stripe"
            />
          </div>
          <div className="flex justify-center bg-white px-12 py-12 rounded-md">
            <img
              className="h-12"
              src="potential_listings/klarna.png"
              alt="Klarna"
            />
          </div>
          <div className="flex justify-center bg-white px-12 py-12 rounded-md">
            <img
              className="h-12"
              src="potential_listings/plaid.png"
              alt="Plaid"
            />
          </div>
          <div className="flex justify-center bg-white px-12 py-12 rounded-md">
            <img
              className="h-12"
              src="potential_listings/checkout.png"
              alt="Checkout.com"
            />
          </div>
          <div className="flex justify-center bg-white px-12 py-12 rounded-md">
            <img
              className="h-12"
              src="potential_listings/revolut.png"
              alt="Revolut"
            />
          </div>
          <div className="flex justify-center bg-white px-12 py-12 rounded-md">
            <img
              className="h-12"
              src="potential_listings/chime.png"
              alt="Chime"
            />
          </div>
          <div className="flex justify-center bg-white px-12 py-12 rounded-md">
            <img className="h-12" src="potential_listings/n26.png" alt="N26" />
          </div>
          <div className="flex justify-center bg-white px-12 py-12 rounded-md">
            <img
              className="h-12"
              src="potential_listings/brex.png"
              alt="Brex"
            />
          </div>
          <div className="flex justify-center bg-white px-12 py-12 rounded-md">
            <img
              className="h-12"
              src="potential_listings/deel.png"
              alt="Deel"
            />
          </div>
          <div className="flex justify-center bg-white px-12 py-12 rounded-md">
            <img
              className="h-12"
              src="potential_listings/gusto.png"
              alt="Gusto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PotentialListings;
