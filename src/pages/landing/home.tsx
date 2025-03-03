import { Grid } from "@mantine/core";
import SideBar from "../../components/menu/sideBar";
import Navbar from "../../components/menu/navBar";
import { Outlet } from "react-router-dom";
export default function home() {
  return (
    <div className="w-[1529px]">
      <Navbar />
      <Grid>
        <Grid.Col span={{ base: 12, md: 2, lg: 1 }}>
          <SideBar />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 10, lg: 11 }}>
          <Outlet />
        </Grid.Col>
      </Grid>
    </div>
  );
}
