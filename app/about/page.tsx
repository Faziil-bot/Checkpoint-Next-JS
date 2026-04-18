export default function About() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-gray-700">
        I am a full stack developer with experience in React, Next.js, and Node.js.
        I love building clean and functional web applications.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Skills</h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li>JavaScript / TypeScript</li>
        <li>React & Next.js</li>
        <li>Node.js & Express</li>
        <li>TailwindCSS</li>
      </ul>
    </div>
  );
}