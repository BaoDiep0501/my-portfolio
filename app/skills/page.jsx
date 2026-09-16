import SectionTitle from "../../components/SectionTitle";

const skillGroups = [
  {
    title: "Frontend Development",
    description:
      "Các công nghệ tôi sử dụng để xây dựng giao diện Web.",
    skills: [
      {
        name: "HTML",
        level: "Cơ bản - Khá",
        description:
          "Xây dựng cấu trúc và nội dung cho website.",
      },
      {
        name: "CSS",
        level: "Cơ bản - Khá",
        description:
          "Thiết kế giao diện, bố cục và responsive.",
      },
      {
        name: "JavaScript",
        level: "Cơ bản - Khá",
        description:
          "Xử lý logic, tương tác và chức năng cho Web.",
      },
      {
        name: "React",
        level: "Đang học",
        description:
          "Xây dựng giao diện bằng Component và Props.",
      },
      {
        name: "Next.js",
        level: "Đang học",
        description:
          "Xây dựng ứng dụng Web với App Router và Server Components.",
      },
      {
        name: "Tailwind CSS",
        level: "Đang sử dụng",
        description:
          "Xây dựng giao diện nhanh bằng Utility Classes.",
      },
    ],
  },

  {
    title: "Backend & Database",
    description:
      "Những công nghệ tôi đang tìm hiểu để phát triển ứng dụng hoàn chỉnh.",
    skills: [
      {
        name: "Node.js",
        level: "Đang học",
        description:
          "Xây dựng Backend và xử lý logic phía Server.",
      },
      {
        name: "MySQL",
        level: "Cơ bản",
        description:
          "Thiết kế Database và thực hiện các truy vấn SQL.",
      },
      {
        name: "REST API",
        level: "Đang học",
        description:
          "Tìm hiểu cách xây dựng và sử dụng API.",
      },
    ],
  },

  {
    title: "Tools & Other Skills",
    description:
      "Các công cụ hỗ trợ quá trình học tập và phát triển phần mềm.",
    skills: [
      {
        name: "Git",
        level: "Cơ bản - Khá",
        description:
          "Quản lý phiên bản và theo dõi thay đổi của dự án.",
      },
      {
        name: "GitHub",
        level: "Cơ bản - Khá",
        description:
          "Lưu trữ source code và làm việc với repository.",
      },
      {
        name: "VS Code",
        level: "Thành thạo",
        description:
          "Môi trường phát triển chính cho các dự án Web.",
      },
      {
        name: "Python",
        level: "Cơ bản",
        description:
          "Sử dụng cho các bài tập, xử lý dữ liệu và dự án học tập.",
      },
      {
        name: "Responsive Design",
        level: "Đang học",
        description:
          "Thiết kế giao diện phù hợp với nhiều kích thước màn hình.",
      },
      {
        name: "Problem Solving",
        level: "Đang phát triển",
        description:
          "Phân tích vấn đề và tìm giải pháp trong quá trình lập trình.",
      },
    ],
  },
];

function SkillCard({ skill }) {
  return (
    <div className="group rounded-2xl border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold text-gray-900 transition group-hover:text-blue-600">
          {skill.name}
        </h3>

        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
          {skill.level}
        </span>
      </div>

      <p className="mt-4 leading-7 text-gray-600">
        {skill.description}
      </p>
    </div>
  );
}
function PropsDemo({ name, age, isStudent, skills }) {
  return (
    <div className="rounded-2xl border bg-white p-7 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Props Demo
          </p>

          <h2 className="mt-2 text-2xl font-bold text-gray-900">
            Truyền dữ liệu bằng Props
          </h2>
        </div>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
          React Props
        </span>
      </div>

      <p className="mt-4 leading-7 text-gray-600">
        Component cha truyền nhiều loại dữ liệu khác nhau xuống
        Component con thông qua Props.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {/* String */}
        <div className="rounded-xl bg-gray-50 p-5">
          <p className="text-sm font-semibold text-blue-600">
            String
          </p>

          <p className="mt-2 text-gray-900">
            Họ tên: <strong>{name}</strong>
          </p>
        </div>

        {/* Number */}
        <div className="rounded-xl bg-gray-50 p-5">
          <p className="text-sm font-semibold text-blue-600">
            Number
          </p>

          <p className="mt-2 text-gray-900">
            Tuổi: <strong>{age}</strong>
          </p>
        </div>

        {/* Boolean */}
        <div className="rounded-xl bg-gray-50 p-5">
          <p className="text-sm font-semibold text-blue-600">
            Boolean
          </p>

          <p className="mt-2 text-gray-900">
            Sinh viên:{" "}
            <strong>{isStudent ? "Có" : "Không"}</strong>
          </p>
        </div>

        {/* Array */}
        <div className="rounded-xl bg-gray-50 p-5">
          <p className="text-sm font-semibold text-blue-600">
            Array
          </p>

          <div className="mt-2 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <SectionTitle
        label="My Skills"
        title="Kỹ năng"
        description="Những công nghệ, công cụ và kỹ năng tôi đang học tập và sử dụng trong quá trình phát triển ứng dụng."
      />
<PropsDemo
  name="Thanh Tài"
  age={20}
  isStudent={true}
  skills={["HTML", "CSS", "JavaScript", "React"]}
/>
      <div className="space-y-12">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {group.title}
              </h2>

              <p className="mt-2 text-gray-600">
                {group.description}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {group.skills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}