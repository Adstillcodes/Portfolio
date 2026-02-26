const Hero = () => {
  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Anvits Freelance 
          <span className="block text-blue-600">
            Portfolio
          </span>
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          
        </p>

        <div className="flex justify-center gap-4">
          <a
  href="#projects"
  className="bg-primary text-green px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
>
  View My Work
</a>

          
        </div>
      </div>
    </section>
  );
};

export default Hero;