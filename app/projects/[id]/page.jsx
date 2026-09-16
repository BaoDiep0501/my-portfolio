import Link from "next/link";
import { notFound } from "next/navigation";

const projectData = {
  portfolio: {
    title: "Developer Portfolio",
    category: "Web Development",
    description:
      "Website portfolio cá nhân được xây dựng để giới thiệu bản thân, kỹ năng, học vấn và các dự án đã thực hiện.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    goal:
      "Xây dựng một website cá nhân hiện đại, responsive và có cấu trúc rõ ràng để giới thiệu năng lực phát triển Web.",
    features: [
      "Trang giới thiệu bản thân",
      "Trang kỹ năng",
      "Danh sách các dự án",
      "Routing giữa các trang",
      "Dynamic Routing cho từng project",
      "Responsive trên nhiều thiết bị",
    ],
  },

  "haircut-booking": {
    title: "Haircut Booking",
    category: "Web Application",
    description:
      "Ứng dụng hỗ trợ người dùng xem dịch vụ và đặt lịch cắt tóc trực tuyến.",
    technologies: ["React", "Node.js", "MySQL"],
    goal:
      "Xây dựng hệ thống đặt lịch giúp người dùng dễ dàng lựa chọn dịch vụ và quản lý lịch hẹn.",
    features: [
      "Đăng ký và đăng nhập",
      "Xem danh sách dịch vụ",
      "Đặt lịch cắt tóc",
      "Quản lý lịch hẹn",
      "Lưu trữ dữ liệu bằng MySQL",
    ],
  },

  "air-pollution": {
    title: "Air Pollution Analysis",
    category: "Data Analysis",
    description:
      "Ứng dụng phân tích dữ liệu chất lượng không khí và trình bày kết quả dưới dạng trực quan.",
    technologies: ["Python", "Data Analysis", "Visualization"],
    goal:
      "Phân tích dữ liệu môi trường và giúp người dùng dễ dàng theo dõi chất lượng không khí.",
    features: [
      "Đọc và xử lý dữ liệu",
      "Phân tích dữ liệu môi trường",
      "Tính toán các chỉ số",
      "Trực quan hóa dữ liệu",
      "Hiển thị kết quả phân tích",
    ],
  },
};

export default async function ProjectDetail({ params }) {
  const { id } = await params;

  const project = projectData[id];

  if (!project) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      {/* Back */}
      <Link
        href="/projects"
        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
      >
        ← Quay lại Projects
      </Link>

      {/* Header */}
      <div className="mt-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          {project.category}
        </p>

        <h1 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
          {project.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          {project.description}
        </p>
      </div>

      {/* Technologies */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900">
          Công nghệ sử dụng
        </h2>

        <div className="mt-5 flex flex-wrap gap-3">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      {/* Goal */}
      <div className="mt-12 rounded-2xl border bg-white p-7 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900">
          Mục tiêu dự án
        </h2>

        <p className="mt-4 leading-8 text-gray-600">
          {project.goal}
        </p>
      </div>

      {/* Features */}
      <div className="mt-8 rounded-2xl border bg-white p-7 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900">
          Tính năng chính
        </h2>

        <ul className="mt-5 space-y-3">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-gray-600"
            >
              <span className="mt-1 text-blue-600">✓</span>

              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Back button */}
      <div className="mt-10">
        <Link
          href="/projects"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          ← Xem tất cả dự án
        </Link>
      </div>
    </section>
  );
}