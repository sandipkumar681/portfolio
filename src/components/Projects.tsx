const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Replace these placeholders with your real project cards */}
        <div className="p-4 shadow-lg border rounded">
          <h3 className="font-semibold text-xl mb-2">Streamio</h3>
          <p className="text-gray-600 dark:text-gray-300">
            A YouTube-like platform built using MERN, Cloudinary, and Redux Toolkit.
          </p>
        </div>
        <div className="p-4 shadow-lg border rounded">
          <h3 className="font-semibold text-xl mb-2">Nimbus Notes</h3>
          <p className="text-gray-600 dark:text-gray-300">
            A secure cloud note-taking app with JWT, bcrypt, and full CRUD features.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;