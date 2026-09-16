
const docs = {
  react: {
    title: "React",
    description:
      "React là thư viện JavaScript dùng để xây dựng giao diện người dùng dựa trên Component.",
    topics: [
      {
        title: "Components",
        slug: "components",
        description:
          "Component là các khối giao diện độc lập, có thể tái sử dụng trong nhiều phần của ứng dụng.",
      },
      {
        title: "Props",
        slug: "props",
        description:
          "Props là cách Component cha truyền dữ liệu xuống Component con.",
      },
      {
        title: "State",
        slug: "state",
        description:
          "State dùng để lưu trữ dữ liệu có thể thay đổi trong quá trình người dùng tương tác với ứng dụng.",
      },
    ],
  },
};

export default async function DocsPage({ params }) {
  const { slug } = await params;

  const currentPath = slug.join("/");
  const topic = slug[1];

  const reactDocs = docs.react;

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Documentation
        </p>

        <h1 className="mt-3 text-4xl font-bold text-gray-900">
          {topic
            ? `${topic.charAt(0).toUpperCase()}${topic.slice(1)}`
            : reactDocs.title}
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
          {topic
            ? reactDocs.topics.find((item) => item.slug === topic)
                ?.description
            : reactDocs.description}
        </p>
      </div>

      {/* Routing Demo */}
      <section className="mb-10 rounded-2xl border bg-white p-7 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-blue-600">
              Catch-all Routing
            </p>

            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              Đường dẫn hiện tại
            </h2>
          </div>

          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
            [...slug]
          </span>
        </div>

        <div className="mt-5 rounded-xl bg-gray-100 p-5">
          <code className="text-sm text-gray-800">
            /docs/{currentPath}
          </code>
        </div>

        <p className="mt-4 text-sm leading-6 text-gray-600">
          URL này được xử lý bởi file{" "}
          <code className="rounded bg-gray-100 px-1 py-0.5">
            app/docs/[...slug]/page.jsx
          </code>
          .
        </p>
      </section>

      {/* Documentation topics */}
      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            React Documentation
          </h2>

          <p className="mt-2 text-gray-600">
            Một số chủ đề cơ bản trong React.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {reactDocs.topics.map((item) => (
            <a
              key={item.slug}
              href={`/docs/react/${item.slug}`}
              className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {item.description}
              </p>

              <p className="mt-5 text-sm font-semibold text-blue-600">
                /docs/react/{item.slug} →
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Examples */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Ví dụ Catch-all Routing
        </h2>

        <div className="mt-5 space-y-3">
          <div className="rounded-xl border bg-white p-4">
            <code>/docs/react</code>
          </div>

          <div className="rounded-xl border bg-white p-4">
            <code>/docs/react/components</code>
          </div>

          <div className="rounded-xl border bg-white p-4">
            <code>/docs/react/components/props</code>
          </div>
        </div>

        <p className="mt-5 leading-7 text-gray-600">
          Các URL có số lượng segment khác nhau nhưng đều được xử lý bởi
          cùng một Dynamic Route sử dụng{" "}
          <code className="rounded bg-gray-100 px-1 py-0.5">
            [...slug]
          </code>
          .
        </p>
      </section>
    </main>
  );
}

