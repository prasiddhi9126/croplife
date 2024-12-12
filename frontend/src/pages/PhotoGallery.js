import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {useGSAP} from "@gsap/react"



import farmPhoto1 from "../images/farmPhoto1.jpg";
import farmPhoto2 from "../images/farmPhoto2.jpg";
import farmPhoto3 from "../images/farmPhoto3.jpg";
import farmPhoto4 from "../images/farmPhoto4.jpg";
import farmPhoto5 from "../images/farmPhoto5.jpg";
import farmPhoto6 from "../images/farmPhoto6.jpg";
import farmPhoto7 from "../images/farmPhoto7.jpg";
import farmPhoto8 from "../images/farmPhoto8.jpg";
import farmPhoto9 from "../images/farmPhoto9.jpg";
import farmPhoto10 from "../images/farmPhoto10.jpg";
import farmPhoto11 from "../images/farmPhoto11.jpg";
import farmPhoto12 from "../images/farmPhoto12.jpg";
import farmPhoto13 from "../images/farmPhoto13.jpg";
import farmPhoto14 from "../images/farmPhoto14.jpg";
import farmPhoto15 from "../images/farmPhoto15.jpg";
import farmPhoto16 from "../images/farmPhoto16.jpg";
import farmPhoto17 from "../images/farmPhoto17.jpg";
import farmPhoto18 from "../images/farmPhoto18.jpg";
import farmPhoto19 from "../images/farmPhoto19.jpg";
import farmPhoto20 from "../images/farmPhoto20.jpg";
import farmPhoto21 from "../images/farmPhoto21.jpg";
import farmPhoto22 from "../images/farmPhoto22.jpg";
import farmPhoto23 from "../images/farmPhoto23.jpg";
import farmPhoto24 from "../images/farmPhoto24.jpg";

gsap.registerPlugin(useGSAP);

const farmPhotos = [
  { src: farmPhoto1, name: "Farmer with Crops" },
  { src: farmPhoto2, name: "Harvesting Wheat" },
  { src: farmPhoto3, name: "Sunset Over the Fields" },
  { src: farmPhoto4, name: "Tractor Plowing Field" },
  { src: farmPhoto5, name: "Barn and Silo" },
  { src: farmPhoto6, name: "Golden Fields of Wheat" },
  { src: farmPhoto7, name: "Farmers Market Stall" },
  { src: farmPhoto8, name: "Green Pastures" },
  { src: farmPhoto9, name: "Farmhouse in the Morning" },
  { src: farmPhoto10, name: "Cow Grazing in Field" },
  { src: farmPhoto11, name: "Vegetable Garden" },
  { src: farmPhoto12, name: "Sheep Herd on Hillside" },
  { src: farmPhoto13, name: "Chicken Coop" },
  { src: farmPhoto14, name: "Freshly Plowed Soil" },
  { src: farmPhoto15, name: "Orchard in Bloom" },
  { src: farmPhoto16, name: "Rural Landscape" },
  { src: farmPhoto17, name: "Hay Bales in Field" },
  { src: farmPhoto18, name: "Pumpkin Patch" },
  { src: farmPhoto19, name: "Vineyard Rows" },
  { src: farmPhoto20, name: "Farm Equipment" },
  { src: farmPhoto21, name: "Rustic Farm Gate" },
  { src: farmPhoto22, name: "Windmill at Sunset" },
  { src: farmPhoto23, name: "Scenic Country Road" },
  { src: farmPhoto24, name: "Farm Fresh Produce" },
];

const PhotoGallery = () => {
  const photosRef = useRef([]);

  useGSAP(() => {
    const photos = photosRef.current;
    
    if (!photos) return;

    
    gsap.from(photos, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="container py-10 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {farmPhotos.map((photo, index) => (
          <div
            key={index}
            className="max-w-xs h-full box"
            ref={(el) => (photosRef.current[index] = el)}
          >
            <div className="bg-gray-200 p-4 rounded-lg shadow-lg h-full">
              <img
                src={photo.src}
                alt={`Farm Photos ${index + 1}`}
                className="object-cover w-full h-full rounded-lg"
              />
              <div className="mt-2 text-center font-semibold">{photo.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;

