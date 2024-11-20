"use client";
import { title } from "@/components/primitives";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function GalleryPage() {
  const images = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
    "/10.jpg",
    "/11.jpg",
    "/12.jpg",

  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Automatically cycle through images in mobile view
  useEffect(() => {
    if (isModalOpen || typeof window === "undefined") return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isModalOpen, images.length]);

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="gallery-container px-5 py-10">
     <div className="flex justify-center pt-5 pb-5">
        <h1 className={title()}>Gallery</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-64 h-64 cursor-pointer"
            onClick={() => openModal(index)}
            style={{
              display: isMobile && index !== currentImageIndex ? "none" : "block",
            }}
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>

      {/* Modal for Full-Screen Slider */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative w-full max-w-3xl">
            <button
              className="absolute top-4 right-4 text-white text-3xl z-50"
              onClick={closeModal}
            >
              <AiOutlineClose />
            </button>
            <div className="relative w-full h-96 flex items-center justify-center">
              <Image
                src={images[currentImageIndex]}
                alt={`Gallery image ${currentImageIndex + 1}`}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <div className="absolute inset-0 flex justify-between items-center px-4">
              <button
                className="text-white text-4xl font-bold z-50"
                onClick={handlePrevImage}
              >
                <AiOutlineLeft />
              </button>
              <button
                className="text-white text-4xl font-bold z-50"
                onClick={handleNextImage}
              >
                <AiOutlineRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
