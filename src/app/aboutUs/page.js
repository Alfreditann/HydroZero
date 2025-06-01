"use client";

import Link from "next/link";
import { allProducts } from "@/data";
import { useState } from "react";

export default function AboutUs() {
  return (
    <div>
      <div className="aboutHero">
        <h1 className="heroAText">Our water story</h1>
        <h2 className="heroAText">
          The story of Diet Water begins with a simple question: What if water had fewer calories?
        </h2>
        <div className="heroAImgContainer">
          <img className="heroImg" src="./heroA.png" alt="Hero" />
        </div>
      </div>

      <div className="aboutHero">
        <div className="aboutSTitle">
          <h2 className="heroAText">The start</h2>
          <img src="./WaterDrop.png" className="waterImage" alt="Water Drop" />
        </div>
        <div className="heroATextContainer">
        <p className="heroAText">
          It all started as a joke between friends—someone laughed and said, “What if water had fewer calories?” That sparked the kind of idea you can&apos;t shake. 
          What began as a late-night laugh turned into a mission: to make hydration a little smarter, a little cooler, and a lot more fun. 
          That&apos;s how ZeroHydro was born—a diet water company built on curiosity, creativity, and a shared love for the ridiculous. 
          Turns out, not all good ideas start serious.
        </p>
        </div>
      </div>
      <div className="aboutHero">
        <div className="aboutSTitle">
          <h2 className="heroAText">Our comunity</h2>
          <img src="./Community.png" className="waterImage" alt="Water Drop" />
        </div>
        <div className="heroATextContainer">
        <p className="heroAText">
        HydroZero was never just about the water—it&apos;s about the people who believe in better hydration. From early supporters to new fans, our community has shaped every step. They share ideas, give feedback, and help us grow. Together, we&apos;re more than a brand—we&apos;re a movement built on curiosity, connection, and clean water.
        </p>
        </div>
      </div>
      <div className="aboutHero">
        <div className="aboutSTitle">
          <h2 className="heroAText">The future</h2>
          <img src="./ThumbsUp.png" className="waterImage" alt="Water Drop" />
        </div>
        <div className="heroATextContainer">
        <p className="heroAText">
        The future of HydroZero is as clear as our water—bold, refreshing, and full of purpose. We&apos;re exploring new blends, sustainable packaging, and smarter ways to hydrate. With our community by our side, we&apos;re not just imagining what&apos;s next—we&apos;re building it, drop by drop.
        </p>
        </div>
      </div>
      <div className="heroAImgContainer">
      <img className ="heroImg" src="./factory.png"></img>
      </div>
      <div className="aboutHero">
        <div className="aboutSTitle">
          <h2 className="heroAText">The future</h2>
        </div>
        <div className="heroATextContainer">
        <p className="heroAText">
        The future of HydroZero is as clear as our water—bold, refreshing, and full of purpose. We&apos;re exploring new blends, sustainable packaging, and smarter ways to hydrate. With our community by our side, we&apos;re not just imagining what&apos;s next—we&apos;re building it, drop by drop.
        </p>
        </div>
      </div>
    </div>
  );
}
