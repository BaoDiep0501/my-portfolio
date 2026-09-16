export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-12 md:grid-cols-2">
        
        {/* Nội dung */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Developer Portfolio
          </p>

          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            Xin chào, tôi là
            <span className="text-blue-600"> Thanh Tài</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Tôi là sinh viên Công nghệ đa phương tiện, định hướng phát triển
            ứng dụng Web. Tôi đang học React, Next.js và các công nghệ phát
            triển phần mềm hiện đại.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              Xem dự án
            </a>

            <a
              href="/contact"
              className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-100"
            >
              Liên hệ
            </a>
          </div>
        </div>

        {/* Card */}
        <div className="rounded-2xl bg-gray-100 p-10 shadow-sm">
          <div className="rounded-xl bg-white p-8 shadow">
            <p className="text-sm text-gray-500">Current Focus</p>

            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              Full-stack Web Development
            </h2>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-700">
                React
              </span>

              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-700">
                Next.js
              </span>

              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-700">
                JavaScript
              </span>

              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-700">
                Tailwind CSS
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}