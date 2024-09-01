import loader from "../public/assets/icons/loader.svg";
import Image from "next/image";

const Loader = () => {
  return (
    <div className="loader">
      <Image
        src={loader}
        alt="loader"
        width={32}
        height={32}
        className="animate-spin"
      />
    </div>
  );
};

export default Loader;
