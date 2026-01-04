"use client"
import courseData from '@/data/musicCourses.json'
import { GlareCard } from "@/components/ui/glare-card";
import { useParams } from 'next/navigation';

function page() {

   const {slug} = useParams<{slug: string}>()
    const course = courseData.courses.find((course)=> course.slug === slug)

  return (
    <div className='h-[250vh] md:h-[120vh] mx-auto flex justify-center items-center'>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <GlareCard className='flex justify-center items-center flex-col'>
        <h2 className='text-xl font-bold'>{course?.title}</h2>
      </GlareCard>
      <GlareCard>
        <img className="h-full w-full absolute inset-0 object-cover" src={course?.image} alt={course?.title} />
      </GlareCard>
      <GlareCard className="flex flex-col justify-center items-start py-8 px-6">
        <p className="font-semibold text-white text-lg"><span className='font-bold'>Price:</span> {course?.price}$</p>
        <p className="font-semibold text-white text-lg"><span className='font-bold'>Instructor:</span> {course?.instructor}</p>
        <p className="font-normal text-base text-neutral-200 mt-4">{course?.description}</p>
      </GlareCard>
    </div>
    </div>
  )
}

export default page
