"use client"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { FormEvent, useState } from "react"

function page() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    setEmail('')
    setMessage('')
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-6 pt-36 relative">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="max-w-2xl mx-auto p-4 relative z-10 flex flex-col justify-center items-center">
        <h2 className="text-3xl sm:text-5xl font-sans mb-7 md:text-7xl font-semibold">Contact Us</h2>
        <p className="text-sm md:text-lg text-center mx-auto text-gray-400"> We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.</p>
        <form onSubmit={handleSubmit} className="space-y-2 mt-4">
          <input type="email" placeholder="Enter your email" className="w-full p-3 rounded-2xl bg-gray-800 text-gray-400" value={email} onChange={(e) => setEmail(e.target.value)} />
          <textarea className="w-full p-3 rounded-2xl bg-gray-800 text-gray-400" placeholder="Enter your message" rows={5} value={message} onChange={(e)=> setMessage(e.target.value)}></textarea>
          <button type="submit" className="bg-cyan-950 p-2 hover:bg-cyan-900 transition-all duration-150 cursor-pointer rounded-lg">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default page
