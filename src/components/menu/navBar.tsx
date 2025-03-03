import { Autocomplete } from "@mantine/core";
import SoK from "../../assets/SoK.png";

export default function navBar() {
  return (
    <div className="h-20 flex flex-row justify-between items-center pl-12 border-b-1 border-gray-300">
      <img src={SoK} className="object-contain h-[120px]" />
      <Autocomplete
        className="w-[400px]"
        placeholder="Pick value or enter anything"
        data={["React", "Angular", "Vue", "Svelte"]}
      />
      <div className="w-[200px] border border-black">asd</div>
    </div>
  );
}
