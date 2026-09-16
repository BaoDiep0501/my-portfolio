import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-7xl font-bold text-blue-600">
        404
      </p>

      <h1 className="mt-6 text-3xl font-bold text-gray-900">
        Không tìm thấy trang
      </h1>

      <p className="mt-4 text-gray-600">
        Trang bạn đang tìm kiếm không tồn tại.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
      >
        Quay về trang chủ
      </Link>
    </section>
  );
}