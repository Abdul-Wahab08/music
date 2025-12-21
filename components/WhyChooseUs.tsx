"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Personalized Music Training",
    description:
      "Experience music instruction designed specifically for you. Our approach adapts to your goals and skill level, providing guidance that ensures steady growth and meaningful progress.",
  },
  {
    title: "Individual Learning Path",
    description:
      "Each student follows a customized learning path. Lessons are tailored to strengthen technique, deepen understanding, and build confidence at every stage of development.",
  },
  {
    title: "Structured Skill Development",
    description:
      "Our programs are organized to advance your musical abilities in a clear, logical progression. Each step is crafted to develop mastery efficiently while encouraging creativity.",
  },
  {
    title: "Real-Time Feedback",
    description:
      "Engage in interactive learning with immediate feedback. This approach allows you to correct mistakes, refine technique, and enhance performance as you practice.",
  },
  {
    title: "Modern, Up-to-Date Curriculum",
    description:
      "Learn with the most current methods, tools, and technologies in music education. Our curriculum is continuously updated to reflect industry standards and evolving trends.",
  },
  {
    title: "Extensive Learning Resources",
    description:
      "Gain access to a wide variety of lessons, exercises, and materials. Our platform provides ongoing opportunities to explore new skills and expand your musical knowledge.",
  },
];


function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs
