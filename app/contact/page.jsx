import ContactForm from "../../components/ContactForm";

export default function Contact() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-12 md:grid-cols-2 md:items-start">
        {/* Information */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Contact
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
            Liên hệ với tôi
          </h1>

          <p className="mt-6 leading-8 text-gray-600">
            Nếu bạn muốn trao đổi về một dự án, công việc hoặc cơ hội
            hợp tác, hãy gửi tin nhắn cho tôi.
          </p>

          <div className="mt-8 space-y-5">
            <div>
              <p className="text-sm font-semibold text-gray-900">
                Email
              </p>

              <p className="mt-1 text-gray-600">
                thanh.tai@example.com
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-900">
                Location
              </p>

              <p className="mt-1 text-gray-600">
                Vietnam
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-900">
                Focus
              </p>

              <p className="mt-1 text-gray-600">
                Web Development
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <ContactForm />
      </div>
    </section>
  );
}