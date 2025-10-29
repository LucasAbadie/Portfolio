"use client";

import React from "react";
import {
    CodeIcon,
    PuzzleIcon,
    BrainIcon,
    LightbulbIcon,
} from "lucide-react";
import CompetenceCard from "@/components/Projects/Competence-Card";

interface CompetencesProps {
    technicalContribution: string;
    competences: {
        title: string;
        subtitle?: React.ReactNode;
        skills: string[];
    }[];
}

const icons = [CodeIcon, PuzzleIcon, BrainIcon, LightbulbIcon];

export default function Competence({ technicalContribution, competences }: CompetencesProps) {
  return (
    <section className="pt-20 pb-40 px-4 bg-gradient-to-b from-neutral-900 to-black">
      <div className="container mx-auto mb-20 text-center">
        <h3 className="text-xl mb-2 font-bold uppercase">
          Build with Purpose
        </h3>
        <h1 className="text-4xl mb-8">
          Compétences mises en œuvre
        </h1>
        <p
          className="mx-auto w-full px-4 text-white/50 font-neutral text-lg lg:w-11/12 lg:px-20 whitespace-pre-line"
        >
          {technicalContribution}
        </p>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {competences.map((props, id) => (
          <CompetenceCard key={id} icon={icons[id]} title={props.title} subtitle={props.subtitle} skills={props.skills} />
        ))}
      </div>
    </section>
  );
}
