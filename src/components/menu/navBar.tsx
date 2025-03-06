import { Autocomplete, Text } from "@mantine/core";
import SoK from "../../assets/SoK.png";

export default function navBar() {
  const boss = "my boss";
  return (
    <div className="h-16 flex flex-row justify-between items-center pl-12 border-b-1 border-gray-300 bg-white">
      <img src={SoK} className="object-contain h-[100px]" />
      <Autocomplete
        className="w-[320px]"
        placeholder="Pick value or enter anything"
        data={["React", "Angular", "Vue", "Svelte"]}
      />
      <div className="w-[300px]">
      <Text
      size="xl"
      fw={900}
      variant="gradient"
      gradient={{ from: 'rgba(255, 0, 0, 1)', to: 'rgba(251, 255, 0, 1)', deg: 0 }}
    >
          ⚡ Welcome, {boss || "Guest"} ⚡
        </Text>
      </div>
    </div>
  );
}
