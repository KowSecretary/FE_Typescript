import { Text } from "@mantine/core";
import Ava from "../../assets/avatar.png";
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
      <div className="flex flex-row">
        <Text>áda</Text>
        <img src={Ava} className="h-96"/>
      </div>
    </div>
  );
}
