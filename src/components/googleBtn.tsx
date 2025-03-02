import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const clientId =
  "440405345589-dl8ada6u4bm9qek9k1m0g5d8323tvc17.apps.googleusercontent.com";

export function GoogleButton() {
  const fetchProfile = async (accessToken: string) => {
    console.log(accessToken);
    try {
      const response = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.setItem("user_profile", response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Lỗi khi lấy profile:", error);
    }
  };

  const onSuccess = (res: any) => {
    console.log("LOGIN SUCCESS!", res);
    fetchProfile(res.credential);
  };

  const onFailure = () => {
    console.log("LOGIN FAIL!");
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin onSuccess={onSuccess} onError={onFailure} />
    </GoogleOAuthProvider>
  );
}
