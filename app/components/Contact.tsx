import { Mail, Phone, Globe, Facebook, Instagram, Send } from "lucide-react";

export default function Contact() {
  return (
    <div
      id="contact"
      className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 px-6 py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-5">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you. Reach out for inquiries, collaborations,
            or just to say hello!
          </p>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Company info */}
          <section className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              About Our Company
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              We are a passionate team dedicated to crafting innovative web
              solutions that drive results. From sleek designs to robust
              functionality, we bring ideas to life.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <Mail className="text-blue-600" size={20} />
                <span className="text-gray-700">info@company.com</span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-green-600" size={20} />
                <span className="text-gray-700">+91 9874563214</span>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4 mr-100">
                Follow Us
              </h3>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                  aria-label="Website"
                >
                  <Globe size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-pink-500 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </section>

          {/* Contact form */}
          <section className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-6">
              <input
                type="email"
                placeholder="Your Email Address"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-700
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                transition-all"
              />

              <textarea
                rows={6}
                placeholder="Tell us more about your inquiry..."
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-700
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                transition-all resize-none"
              />

              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-blue-600 to-indigo-600
                hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl
                font-semibold flex items-center justify-center gap-2 transition-all"
              >
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
