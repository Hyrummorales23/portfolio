export default function Footer() {
  return (
    <footer
      id="contact"
      className="py-24 text-sm text-text-secondary leading-relaxed"
    >
      <div className="max-w-md">
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          Let us Connect
        </h2>
        <p className="mb-6">
          I am currently looking for entry-level software development
          opportunities. Whether you have a question or just want to say hi, I
          will try my best to get back to you!
        </p>
        <a
          href="mailto:your-email@example.com"
          className="inline-block bg-accent text-white font-bold py-3 px-8 rounded-full transition-transform hover:scale-105"
        >
          Say Hello
        </a>
      </div>
      <p className="mt-20 text-xs">
        Built with Next.js, Tailwind CSS, and Framer Motion. Design inspired by
        Brittany Chiang & Apple Music.
      </p>
    </footer>
  );
}
