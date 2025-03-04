import MainCarousel from "../../components/carousel/mainCarousel";
import GeneralHeader from "../../components/introduction/general";

export default function mainPage() {
  return (
    <div className="flex flex-col gap-10 w-full">
      <MainCarousel />
      <GeneralHeader />
    </div>
  );
}
