import Image from "next/image";
import Card from "../ui/card";
import { signika } from "../ui/fonts";

const Hero = () => {
  return (
    <Card>
      <Image
        src={"/assets/images/cottonField.webp"}
        width={736}
        height={552}
        className="object-cover w-full rounded h-72"
        alt="field of cotton"
      />
      <h2
        className={`${signika.className} font-bold text-4xl text-center my-4 lg:text-6xl`}
      >
        Why attend the cottonflower ward?
      </h2>
      <ul className="pl-6 text-2xl list-disc">
        <li>Spiritual Growth</li>
        <li>Fellowship / Friendship</li>
        <li>Fun Activities</li>
        <li>Leadership Training</li>
        <li>Leadership Opportunities</li>
      </ul>
    </Card>
  );
};

export default Hero;
