const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-4">
          Selected Work
        </h2>

        <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
          A collection of concept business websites designed to showcase
          modern layout, responsiveness, and user-focused design.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Project 1 */}
          <div className="border rounded-xl overflow-hidden hover:shadow-lg transition">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2">
                Bella Vista – Restaurant Website
              </h3>
              <p className="text-gray-600 mb-4">
                Concept website for a modern restaurant featuring menu
                showcase,and responsive design.
                It includes a reservation system you can try out for yourself! Just enter your mail ID and you can recieve all your reservation details in your inbox.
              </p>
              <button className="text-blue-600 font-medium hover:underline">
                <a href="https://bella-vista-jade.vercel.app" target="_blank" rel="noopener noreferrer">
                  View Project →
                </a>
              </button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="border rounded-xl overflow-hidden hover:shadow-lg transition">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2">
                Grocery Express – E-commerce Website
              </h3>
              <p className="text-gray-600 mb-4">
                Clean and modern e-commerce website design for a grocery delivery service, focused on user experience and mobile responsiveness.
                You can check out the live project by clicking the button below! 
                Features: Add to cart, Checkout process, Product listing(admin page), Responsive design
              </p>
              <button className="text-blue-600 font-medium hover:underline">
                <a href="https://groceryecom.vercel.app" target="_blank" rel="noopener noreferrer">View Project →</a>
                
              </button>
            </div>
          </div>

          

        </div>

      </div>
    </section>
  );
};

export default Projects;