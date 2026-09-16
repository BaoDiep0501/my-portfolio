import Link from "next/link";  
export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
        About Me
      </p>

      <h1 className="mt-2 text-4xl font-bold text-gray-900">
        Giới thiệu bản thân
      </h1>

      <div className="mt-8 max-w-3xl space-y-4 text-lg leading-8 text-gray-600">
        <p>
          Xin chào, tôi là Thanh Tài. Tôi là sinh viên ngành Công nghệ đa
          phương tiện, chuyên ngành Phát triển ứng dụng.
        </p>

        <p>
          Tôi đang tập trung học tập và phát triển kỹ năng về Web Development,
          đặc biệt là JavaScript, React và Next.js.
        </p>

        <p>
          Mục tiêu của tôi là xây dựng những ứng dụng Web có giao diện đẹp,
          dễ sử dụng và có cấu trúc tốt.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap gap-4">
  <Link
    href="/about/education"
    className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
  >
    Xem học vấn
  </Link>

  <Link
    href="/about/experience"
    className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:bg-gray-100"
  >
    Xem kinh nghiệm
  </Link>
</div>
    </section>
   
  );
   
}
