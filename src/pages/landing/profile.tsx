import Header from "../../components/introduction/profileHeader";
import ListIntro from "../../components/introduction/listIntro";
import ListIntro2 from "../../components/introduction/quote";
import Title from "../../components/introduction/title";
import GeneralProfile from "../../components/introduction/generalProfile";

export default function About() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="h-20"></div>

      {/* General Info */}
      <Title titleSection="General" />
      <GeneralProfile/>
    </div>
  );
}
