import { Divider, Flex, Title } from "@mantine/core";
import { WEB_NAME } from "../../info";
import BackgroundLogin from "../../components/bgVideo";
import FormLogin from "../../components/login/formLogin";

import { GoogleButton } from "../../components/googleBtn";

export default function login() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <BackgroundLogin />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
        <div className="w-auto h-auto border border-green-700 bg-white/10 backdrop-blur-sm shadow-lg rounded-lg p-10 flex flex-col justify-center items-center">
          <Flex justify="center" align="center" direction="column">
            <Title className="py-5" order={3}>
              Welcome to {WEB_NAME}
            </Title>
            <GoogleButton />
            <Divider
              label="Or continue with email"
              labelPosition="center"
              my="lg"
            />
            <div className="text-left">
              <FormLogin />
            </div>
          </Flex>
        </div>
      </div>
    </div>
  );
}
