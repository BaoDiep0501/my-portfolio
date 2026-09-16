import Link from "next/link";

const projects = [
  {
    id: "portfolio",
    number: "01",
    title: "Developer Portfolio",
    description:
      "Website portfolio cá nhân giới thiệu bản thân, kỹ năng, học vấn và các dự án đã thực hiện.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    id: "haircut-booking",
    number: "02",
    title: "Haircut Booking",
    description:
      "Ứng dụng đặt lịch cắt tóc cho phép người dùng xem dịch vụ và đặt lịch trực tuyến.",
    technologies: ["React", "Node.js", "MySQL"],
  },
  {
    id: "air-pollution",
    number: "03",
    title: "Air Pollution Analysis",
    description:
      "Ứng dụng phân tích dữ liệu chất lượng không khí và hiển thị kết quả trực quan.",
    technologies: ["Python", "Data Analysis", "Visualization"],
  },
];

function ProjectCard({ project }) {
  return (
    <article className="group rounded-2xl border bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-blue-600">
          {project.number}
        </span>

        <span className="text-sm text-gray-400">
          PROJECT
        </span>
      </div>

      <h2 className="mt-6 text-2xl font-bold text-gray-900 transition group-hover:text-blue-600">
        {project.title}
      </h2>

      <p className="mt-4 min-h-[84px] leading-7 text-gray-600">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
          >
            {technology}
          </span>
        ))}
      </div>

      <Link
        href={`/projects/${project.id}`}
        className="mt-7 inline-flex items-center font-semibold text-blue-600 transition group-hover:translate-x-1 hover:text-blue-800"
      >
        Xem chi tiết
        <span className="ml-2">→</span>
      </Link>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          My Work
        </p>

        <h1 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
          Các dự án của tôi
        </h1>

        <p className="mt-5 text-lg leading-8 text-gray-600">
          Một số dự án tôi đã thực hiện trong quá trình học tập
          và phát triển kỹ năng lập trình.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}