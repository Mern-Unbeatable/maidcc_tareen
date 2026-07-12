const MapSection = () => {
  return (
    <section className="section-padding-top pb-0 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3 font-[Poppins]">
          Need face-to-face help?
        </h2>
        <p className="section-desc text-gray-500">
          Visit one of our 23 branches
        </p>
      </div>

      <div className="w-full h-[550px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29200.633635435526!2d90.41674239999996!3d23.81578240000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c6fbd881c29b%3A0x9a7be444b99f2fa!2sKurmitola%20Multicare%20Specialized%20Hospital!5e0!3m2!1sen!2sbd!4v1783825745202!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full grayscale-20 contrast-[1.1]"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
