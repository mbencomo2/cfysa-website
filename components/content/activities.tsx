import BtnLink from "../ui/button";
import Card from "../ui/card";
import QRLink from "./qrLink";

const Activities = () => {
  return (
    <Card>
      <h2 className="self-start mt-4 text-xl font-bold">Activities:</h2>
      <ul className="self-start pl-6 list-disc">
        <li>
          <b>Sunday Services</b>
          <br /> Thomas Building 1:30pm
        </li>
        <li>
          <b>Family Home Evening (FHE)</b>
          <br /> Monday Nights at 7pm
        </li>
        <li>
          <b>Game Night</b>
          <br /> Friday Nights at 7pm
        </li>
        <li>
          <b>Institute</b>
          <br /> Every Tuesday and Thursday
        </li>
        <li>
          <b>Many Other Exciting Activities!</b>
        </li>
      </ul>
      <BtnLink
        href="https://www.facebook.com/groups/cottonflowerysa/"
        target="_blank"
        rel="no-referrer"
        label="Join Friends of CottonFlower YSA on Facebook for updates and Institute/Activity Details!"
      />
      <p className="my-2">
        For updates on YSA Activities by text, send your name and "YSA" to:
        <br />
        <BtnLink href="tel:+6239105168" label="623-910-5168" />
      </p>

      <div>
        <QRLink className="w-48 h-48 p-2 mx-auto my-2 bg-white" />
        <p className="text-center">
          Scan this code to sign up for Text Reminders!
        </p>
      </div>
    </Card>
  );
};

export default Activities;
