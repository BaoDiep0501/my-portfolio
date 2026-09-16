export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-gray-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-xl font-bold">Thanh Tài</h2>

            <p className="mt-2 text-sm text-gray-400">
              Developer Portfolio
            </p>
          </div>

          <div className="text-sm text-gray-400">
            © 2026 Thanh Tài. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
