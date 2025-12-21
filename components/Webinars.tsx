"use client"
import webinarsData from "@/data/musicCourses.json"
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function Webinars() {

    const webinars = webinarsData.courses.filter((webinar) => webinar.isFeatured)

    return (
        <div className="py-12 bg-gray-900">
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
                </div>
                <div className="mt-10">
                    <HoverEffect items={webinars.map((webinar) => (
                        {
                            title: webinar.title,
                            description: webinar.description,
                            link: webinar.slug
                        }
                    ))} />
                </div>
                <div className="mt-10 text-center">
                    <Link href={"/"} className="p-4 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 active:bg-blue-800">
                        View More Webinars
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Webinars
