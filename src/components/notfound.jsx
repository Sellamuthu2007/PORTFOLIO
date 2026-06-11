import error from "../assets/error.png";
import "../styles/global.css";

export default function Notfound() {
  return (
    <>
      <img src={error} className="err-img" />
    </>
  );
}
