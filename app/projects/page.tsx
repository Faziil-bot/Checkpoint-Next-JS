const projects = [
  { id: 1, title: "E-Commerce App", desc: "A full stack shopping app built with Next.js." },
  { id: 2, title: "Weather App", desc: "Real-time weather using OpenWeather API." },
  { id: 3, title: "Blog Platform", desc: "A markdown-based blog with SSR." },
];

export default function Projects() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 gap-4">
        {projects.map((p) => (
          <div key={p.id} className="border rounded-lg p-4 shadow">
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p className="text-gray-600">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}