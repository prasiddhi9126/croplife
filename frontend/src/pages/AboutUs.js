import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {useGSAP} from "@gsap/react"
import farmer2 from "../images/farmer2.jpeg";

gsap.registerPlugin(useGSAP);

const AboutPage = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const image = imageRef.current;
    const text = textRef.current;

    if (!image || !text) return;

    // GSAP animation code
    gsap.from(image, {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(text, {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power2.out",
      delay: 0.5,
    });
  }, []);

  return (
    <div className="flex justify-around items-center">
      <div className="w-1/3" ref={imageRef}>
        <img src={farmer2} alt="Farmer 2" className="w-full p-12" />
      </div>

      <div className="w-1/2" ref={textRef}>
        <h2 className="text-3xl font-bold mb-4">About Farmtech Fusion</h2>
        <p className="mb-4">
          Welcome to Farmtech Fusion, a leading agricultural firm committed to
          modernizing and revolutionizing farming practices. Our mission is to
          empower farmers in rural areas, addressing the challenges they face
          and promoting sustainable agriculture.
        </p>
        <p className="mb-4">
          At Farmtech Fusion, we understand the difficulties farmers encounter,
          from unpredictable weather patterns to market uncertainties. Our goal
          is to provide innovative solutions that enhance productivity, reduce
          costs, and ensure a steady income for farmers.
        </p>
        <p className="mb-4">
          We leverage modern technology and social media to connect farmers,
          share knowledge, and facilitate collaboration. Through our online
          platform, farmers can access valuable resources, stay informed about
          market trends, and connect with a supportive community.
        </p>
        <p className="mb-4">
          Sustainability is at the core of our values. We believe in responsible
          farming practices that preserve the environment and promote long-term
          viability. Our team is dedicated to researching and implementing
          eco-friendly solutions that benefit both farmers and the planet.
        </p>
        <p>
          Join us on this journey towards a brighter future for agriculture.
          Whether you're a farmer looking for guidance or an enthusiast
          passionate about sustainable farming, Farmtech Fusion is your ally in
          cultivating success.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
