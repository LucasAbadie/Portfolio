"use client";

interface CompetenceCardProps {
  icon: React.ElementType;
  title: string;
  subtitle: React.ReactNode;
  skills: string[];
}

export default function CompetenceCard({
  icon: Icon,
  title,
  skills,
}: CompetenceCardProps) {
  return (
    <div color="transparent">
      <div className="grid justify-start">
        <div className="mb-4 grid h-12 w-12 place-content-center rounded-lg bg-neutral-900 p-2.5 text-left text-white">
          <Icon className="h-6 w-6" />
        </div>
        <h5 className="mb-2 text-xl">{title}</h5>
        <div className="flex flex-wrap gap-3 mt-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 text-sm font-medium bg-stone-900 text-stone-100 rounded-full border border-stone-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
