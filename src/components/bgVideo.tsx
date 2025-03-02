import BgVideo from "../assets/video/backgroundLogin.mp4";
export default function bgVideo() {
  return (
    <video
      autoPlay
      muted
      className="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src={BgVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
