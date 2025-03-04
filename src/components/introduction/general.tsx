import { Text } from "@mantine/core";
import Project from "../project/card";
export default function general() {
  return (
    <div>
      <Text
        size="24px"
        fw={700}
        variant="gradient"
        gradient={{ from: "pink", to: "black", deg: 102 }}
      >
        WELCOME TO THE SECRETARY OF KOW
      </Text>
      <div className="flex flex-row flex-wrap gap-11 justify-start py-8">
        <Project />
        <Project />
      </div>
    </div>
  );
}
