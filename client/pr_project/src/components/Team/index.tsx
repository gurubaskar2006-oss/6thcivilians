"use client";

import { useRef } from "react";
import { members } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Parallax from "@/components/ui/Parallax";
import DepthTransition from "@/components/transitions/DepthTransition";
import GroupPhotoCard from "./GroupPhotoCard";
import MemberRow from "./MemberRow";

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="section relative overflow-hidden"
    >
      <Parallax offset={50}>
        <div className="blob left-[10%] top-[20%] h-[26rem] w-[26rem] bg-white/[0.03]" />
        <div className="blob bottom-[10%] right-[5%] h-[28rem] w-[28rem] bg-[#3d3f54]/25" />
      </Parallax>

      <DepthTransition enter exit>
        <div className="wrap relative">
          <SectionHeading
            eyebrow="The Team"
            lines={[
              "Six Pillars.",
              <span key="s" className="text-metal">
                One standard.
              </span>,
            ]}
          />

          <Reveal delay={0.1} scale={0.96} className="mt-16">
            <div className="glass-card overflow-hidden">
              <GroupPhotoCard />
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-6">
            <div className="glass-card overflow-hidden">
              <ul className="flex flex-col p-6 md:p-8 lg:p-10">
                {members.map((member, i) => (
                  <li key={member.name} className="block">
                    <MemberRow member={member} index={i} />
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </DepthTransition>
    </section>
  );
}
