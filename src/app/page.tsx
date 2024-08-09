import Link from "next/link";

const SERVICES = [
  {
    title: "Full-Stack Development",
    description:
      "Expertise in building scalable next-gen apps from scratch with a focus on both front-end and back-end development.",
    icon: "💻",
  },
  {
    title: "DevOps & Infrastructure",
    description:
      "Specialized in deploying and managing applications using Docker, Kubernetes, and AWS for seamless performance.",
    icon: "🚀",
  },
  {
    title: "Frontend Development",
    description:
      "Proficient in React.js, Next.js, TypeScript, and CSS frameworks like Tailwind CSS, ensuring top-notch user experiences.",
    icon: "🎨",
  },
  {
    title: "Backend Development",
    description:
      "Extensive experience with Django, Python, and PostgreSQL to build robust and secure backend systems.",
    icon: "🛠️",
  },
  {
    title: "CI/CD Automation",
    description:
      "Implementing automated testing and CI/CD pipelines to ensure code quality and efficient deployment processes.",
    icon: "🔄",
  },
  {
    title: "Technical Leadership",
    description:
      "Experience as a CTO leading teams and projects, mentoring developers, and driving innovation in tech products.",
    icon: "👨‍💼",
  },
];

export const WORKS = [
  {
    slug: "onroad",
    title: "OnRoad",
    description: "A platform where users can quote vehicle prices anonymously.",
    details:
      "OnRoad is a comprehensive platform that allows users to anonymously quote and compare vehicle prices. I was responsible for both frontend and backend development, ensuring a seamless user experience and robust backend API integration. The project also included secure payment gateway integration and real-time data analytics.",
    technologies: ["React.js", "Node.js", "Express", "MongoDB"],
    link: "https://www.onroad.com",
  },
  {
    slug: "biosis-api-devops",
    title: "Biosis API & DevOps",
    description:
      "API development and DevOps implementation for a bioscience company.",
    details:
      "In this project, I developed and maintained RESTful APIs, implemented CI/CD pipelines using Jenkins, and managed cloud infrastructure on AWS. The focus was on scalability, performance, and security, catering to the specific needs of the bioscience industry.",
    technologies: ["Django", "AWS", "Docker", "Kubernetes"],
    link: "https://www.biosis.com",
  },
  {
    slug: "maalik-dev",
    title: "maalik.dev",
    description:
      "Personal portfolio and blog showcasing projects and expertise.",
    details:
      "maalik.dev is my personal portfolio where I showcase my work, share insights through blogs, and highlight my expertise in various technologies. This project was built using Next.js for SSR and Tailwind CSS for styling. It is optimized for performance and SEO.",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://www.maalik.dev",
  },
];

const TESTIMONIALS = [
  {
    name: "Akshay S.",
    feedback:
      "Malik is a top-tier developer! He delivered high-quality code and was very professional throughout our project.",
  },
  {
    name: "Nitesh O.",
    feedback:
      "Exceptional work! Malik’s expertise in full-stack development helped us launch our product on time.",
  },
  {
    name: "Wyatt B.",
    feedback:
      "Great experience working with Malik. He has a deep understanding of both frontend and backend technologies.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div>
        <header className="bg-gray-200 text-gray-800 p-4 flex justify-between items-center">
          <span>logo</span>
          <span>links</span>
        </header>

        <section className="h-[80vh] flex justify-center items-center bg-gray-300">
          <h6 className="text-5xl text-center">Big Catchy Title</h6>
        </section>

        <section className="flex flex-col justify-center items-center bg-white">
          <h6 className="text-2xl text-center p-8">Services</h6>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h6 className="text-xl font-bold mb-2">{service.title}</h6>
                <p className="text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-200 py-8">
          <h6 className="text-2xl text-center p-8">Work</h6>
          <div className="flex flex-col items-center gap-4">
            {WORKS.map((work, index) => (
              <Link
                key={index}
                href={`work/${work.slug}`}
                className="block bg-white p-4 rounded-lg shadow-md w-3/4 md:w-1/2"
              >
                <h6 className="text-xl font-bold mb-2">{work.title}</h6>
                <p>{work.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-white py-8">
          <h6 className="text-2xl text-center p-8">Testimonials</h6>
          <div className="flex flex-col items-center gap-4">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-md w-3/4 md:w-1/2"
              >
                <p className="italic">&quot;{testimonial.feedback}&quot;</p>
                <h6 className="text-right font-bold mt-4">
                  - {testimonial.name}
                </h6>
              </div>
            ))}
          </div>
        </section>

        <footer className="bg-gray-800 text-white py-8">
          <div className="text-center">
            <h6 className="text-xl font-bold mb-2">Contact Me</h6>
            <p>
              Email:{" "}
              <a href="mailto:hello@maalik.dev" className="underline">
                hello@maalik.dev
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+919975130529" className="underline">
                +91 9975130529
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
