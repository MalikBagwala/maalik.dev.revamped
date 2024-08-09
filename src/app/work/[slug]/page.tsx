"use client";
import { WORKS } from "@/app/page";
import { NextPage } from "next";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const WorkDetailsPage: NextPage = () => {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");
  console.log(slug);
  const project = WORKS.find((work) => work.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Project not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="mb-4">{project.details}</p>
        <div className="mb-4">
          <h6 className="text-xl font-bold mb-2">Technologies Used</h6>
          <ul className="list-disc list-inside">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
        >
          Visit Project
        </a>
        <div className="mt-8">
          <Link href="/projects">
            <a className="text-blue-500 underline">Back to Projects</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkDetailsPage;
