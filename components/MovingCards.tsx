"use client"
import React from 'react'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from '@/lib/utils';

const cards = [
    {
        quote:
            "The personalized attention I received here accelerated my growth more than I ever imagined. The instructors truly care about your progress.",
        name: "Isabella Martinez",
        title: "Piano Student",
    },
    {
        quote:
            "I never thought I could compose my own music confidently. This school gave me the skills and encouragement to make it happen.",
        name: "Daniel Park",
        title: "Composition Student",
    },
    {
        quote:
            "Every lesson challenges me to improve, yet feels approachable. The teachers balance professionalism with genuine support.",
        name: "Olivia Davis",
        title: "Guitar Student",
    },
    {
        quote:
            "Learning in this environment pushed my vocal abilities beyond what I thought was possible. The coaching is precise, motivating, and tailored to me.",
        name: "Ethan Brooks",
        title: "Vocal Student",
    },
    {
        quote:
            "The electronic music production courses are top-notch. I’ve learned advanced techniques I couldn’t find elsewhere, and the instructors are excellent.",
        name: "Sophia Patel",
        title: "Music Production Student",
    },
];


function MovingCards() {
    return (
        <div className='h-[100vh] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden'>

            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:40px_40px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                )}
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
            <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards items={cards} speed='normal' direction='right' />
                </div>
            </div>
        </div>
    )
}

export default MovingCards
