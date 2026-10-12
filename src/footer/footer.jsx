const Footer = () => {
  return (
    <footer className="mt-8 bg-[#064E3B] py-8 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Nature Nest</h2>
            <p className="mt-2 text-sm text-white/80">
              Plants for a better life.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-bold">Quick Links</h3>
            <ul className="space-y-1 text-sm text-white/80">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 font-bold">Contact</h3>
            <p className="text-sm text-white/80">Email: info@naturenest.com</p>
            <p className="text-sm text-white/80">Phone: +91 98765 43210</p>
          </div>
        </div>

        <div className="mt-6 border-t border-white/20 pt-4 text-center text-sm text-white/70">
          © 2026 Nature Nest. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
