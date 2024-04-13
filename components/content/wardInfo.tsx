import BtnLink from "../ui/button";
import Card from "../ui/card";
import { signika } from "../ui/fonts";

const Info = () => {
  return (
    <Card>
      <h2
        className={`${signika.className} font-medium text-2xl my-2 border-b-2 border-gray-500 text-center`}
      >
        Cottonflower YSA Ward
      </h2>

      <div className="w-2/3 my-2">
        <b className="text-lg">Thomas Building</b>
        <br />
        <BtnLink
          href="https://maps.app.goo.gl/6AD8xsx2zZ6Ka3oT7"
          label="13277 West Thomas Rd Goodyear AZ, 85395"
        />
      </div>

      <p className="w-2/3 my-2">
        <b className="text-lg">Bishop Troy Shelton</b>
        <br />
        <BtnLink href="tel:+6025130986" label="602-513-0986" />
      </p>

      <div className="w-full h-1 my-2 bg-accent"></div>

      <iframe
        src="https://www.google.com/maps/d/embed?mid=1pp_OQd5kzezSgiNbYxjs5lFTqz4Vw8A&ehbc=2E312F&noprof=1"
        width="640"
        height="480"
        className="w-full aspect-auto"
        loading="lazy"
        allowFullScreen
        title="Map of Ward Boundaries"
      ></iframe>

      <h3 className="my-2 text-xl font-bold">
        Cottonflower YSA Ward Boundaries:
      </h3>

      <ul className="pl-6 text-xl list-disc">
        <li>All of Buckeye Stake</li>
        <li>All of Goodyear Stake</li>
        <li>
          Surprise West Stake Wards: <br />
          <ul className="pl-6 list-disc">
            <li>Canyon Trails</li>
            <li>Savannah</li>
            <li>Verrado</li>
            <li>Waddell</li>
          </ul>
        </li>
      </ul>
    </Card>
  );
};

export default Info;
