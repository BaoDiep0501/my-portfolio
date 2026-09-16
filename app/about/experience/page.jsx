export default function Experience() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
        Experience
      </p>

      <h1 className="mt-3 text-4xl font-bold text-gray-900">
        Kinh nghiệm
      </h1>

      <div className="mt-8 space-y-6">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-blue-600">
            2025 - 2026
          </p>

          <h2 className="mt-2 text-2xl font-bold text-gray-900">
            Web Development Projects
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Thực hiện các dự án Web trong quá trình học tập,
            tập trung vào React, Next.js và xây dựng giao diện
            responsive.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-blue-600">
            Academic Projects
          </p>

          <h2 className="mt-2 text-2xl font-bold text-gray-900">
            Dự án học tập
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Tham gia xây dựng các dự án liên quan đến phát triển
            ứng dụng, cơ sở dữ liệu và công nghệ Web.
          </p>
        </div>
      </div>
    </section>
  );
}