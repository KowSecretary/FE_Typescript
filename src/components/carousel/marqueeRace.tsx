import { Marquee } from "@gfazioli/mantine-marquee";
import { ReactNode } from "react";

export default function marqueeRace() {
  function BoxComponent({
    children,
    ...props
  }: {
    children: ReactNode;
    [key: string]: any;
  }) {
    return (
      <div className="border-t-4 border-dashed border-black p-4 w-[400px]">
        <div className="bg-gray-800 text-white text-center py-4 rounded-3xl text-xl w-[200px]">
          {children}
        </div>
      </div>
    );
  }
  return (
    <div>
      <Marquee
        duration={19.9}
        className="abosolute bottom-0"
        gap="xs"
        fadeEdges
      >
        <BoxComponent bg="cyan">Growth mindset</BoxComponent>
        <BoxComponent bg="cyan">Creativity</BoxComponent>
        <BoxComponent bg="cyan">Conquer</BoxComponent>
        <BoxComponent bg="cyan">Leadership</BoxComponent>
        <BoxComponent bg="lime">Knowledge</BoxComponent>
      </Marquee>
    </div>
  );
}
