"use client";
import { title } from "@/components/primitives";
import React from "react";

const PricingCards = () => {
  const textGradientStyle = {
    background:
      "-webkit-linear-gradient(50deg, #FFFFFF, #921C25, #921C25,#FFFFFF)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const cardData = [
    {
      image: "https://i.imgur.com/pJNFEHR.png",
      title: "IEEE Member",
      price: " ₹1100",
      features: [
        "Sessions and Talks",
        "Goodies",
        "Food",
        "Networking Opportunity.",
        "Culturals",
        "Candle Light Dinner at Kozhikode Beach",
      ],
    },
    {
      image: "https://i.imgur.com/Ql4jRdB.png",
      title: "IEEE CS Member",
      price: "₹1000 ",
      features: [
        "Sessions and Talks",
        "Goodies",
        "Food",
        "Networking Opportunity.",
        "Culturals",
        "Candle Light Dinner at Kozhikode Beach",
      ],
    },
    {
      image: "https://i.imgur.com/Hg0sUJP.png",
      title: "Non-IEEE Member",
      price: "₹1200 ",
      features: [
        "Sessions and Talks",
        "Goodies",
        "Food",
        "Networking Opportunity.",
        "Culturals",
        "Candle Light Dinner at Kozhikode Beach",
      ],
    },
  ];

  return (
    <div className="w-full px-4 py-10">
      <div className="flex justify-center pt-5 pb-5">
        <h1 className={title()}>Ticket</h1>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-slate-800`}
          >
            <h2 className="text-2xl font-bold text-center py-8">{card.title}</h2>
            <p className="text-center text-4xl font-bold">{card.price}</p>
            <div className="text-center font-medium">
              {card.features.map((feature, index) => (
                <p
                  key={index}
                  className={`py-2 border-b mx-8 ${index === 0 ? "mt-8" : ""}`}
                >
                  {feature}
                </p>
              ))}
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://www.yepdesk.com/buy-tickets/67371281c9e77c000138ebed",
                  "_blank"
                );
              }}
              className={`bg-[#921C25] hover:text-[#921C25] text-black hover:bg-gray-50 duration-150 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3`}
            >
              Register Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
