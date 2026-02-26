import CustomerNavbar from "../components/Navbar"; // adjust if different

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <CustomerNavbar />

      {/* Contact Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          Contact Me
        </h1>

        <p className="text-gray-600 mb-10">
          Interested in working together or need a website built?
          Fill out the form below and I’ll get back to you.
        </p>

        <div className="bg-white rounded-2xl shadow-sm p-8">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg p-3"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg p-3"
              required
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border rounded-lg p-3"
              required
            />

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-xl font-medium hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Quick contact info */}
        <div className="mt-10 text-gray-600">
          <p>📧 your.email@example.com</p>
          <p>🌍 Available for freelance projects</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;