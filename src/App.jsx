import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"


gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const heroRef = useRef(null)
  const projectsRef = useRef(null)

  console.log("My test key:", import.meta.env.VITE_TEST_KEY)

  useEffect(() => {
    const hero = heroRef.current
    const projects = projectsRef.current

    gsap.fromTo(
      hero,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power1.inOut",
      }
    )

    gsap.fromTo(
      projects,
      { opacity: 0, y: 100 },
      {
        scrollTrigger: {
          trigger: projects,
          start: "top 80%",
        },
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.3,
      }
    )
  }, [])

  return (
    <div className="bg-black text-white font-sans">
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="h-screen flex flex-col items-center text-center px-2"
      >
        <h1 className="text-2xl md:text-7xl font-bold mb-2">
          Devin Burkett
        </h1>
        <p className="text-m md:text-2xl mb-6">
          Full Stack Software Engineer
        </p>
        <div className="space-x-4">
          <button className="px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
            View Work
          </button>
          <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
            Contact
          </button>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        ref={projectsRef}
        className="py-24 bg-neutral-900 px-6 md:px-12"
      >
        <h2 className="text-4xl font-semibold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((id) => (
            <motion.div
              key={id}
              className="bg-neutral-800 rounded-2xl p-6 shadow-xl hover:scale-105 transition transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: id * 0.2 }}
            >
              <div className="h-48 bg-neutral-700 rounded-xl mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Project Title {id}</h3>
              <p className="text-sm text-neutral-300">
                Quick description of what this project does and what stack was used.
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

