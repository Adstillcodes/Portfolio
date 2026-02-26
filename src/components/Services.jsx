const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-4">
          Services I Offer
        </h2>

        <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
          I help businesses establish a strong online presence with
          modern, responsive, and performance-focused websites.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Service 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-4">
              Business Website Development
            </h3>
            <p className="text-gray-600">
              Custom-built responsive websites designed to showcase your
              services, build credibility, and attract new customers.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-4">
              Website Redesign & Optimization
            </h3>
            <p className="text-gray-600">
              Modernize outdated websites with improved UI, faster loading
              speed, and mobile responsiveness.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-4">
              Ongoing Support & Maintenance
            </h3>
            <p className="text-gray-600">
              Continuous updates, bug fixes, and technical support to ensure
              your website runs smoothly at all times.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;