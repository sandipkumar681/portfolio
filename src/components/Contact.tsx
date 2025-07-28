const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="mb-6 text-lg max-w-xl mx-auto">
        Feel free to reach out for collaborations or just a friendly hello!
      </p>
      <a
        href="mailto:youremail@example.com"
        className="inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
      >
        Send Email
      </a>
    </section>
  );
};

export default Contact;