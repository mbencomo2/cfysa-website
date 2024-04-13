import Image from "next/image";
import Card from "../ui/card";

const Purpose = () => {
  return (
    <Card>
      <strong className="my-8 text-2xl">
        We can't build a bigger, stronger community of YSAs if we don't have you
        - so come to our activities, come to our Sunday meetings, or both!
      </strong>
      <p>
        YSA wards are open to all young single adults, age 18 to 30, who live
        within the ward's geographic boundaries. Young single adults may choose
        to attend the YSA ward or the family ward in which they live.
      </p>

      <Image
        src={"/assets/images/church_jesus_christ_logo.webp"}
        width={200}
        height={395}
        alt="Logo for the Church of Jesus Christ of Latter-Day Saints"
        className="p-2 my-2 rounded dark:bg-white"
      />
      <q className="my-2">
        The purpose of a young single adult ward is to help young adults find
        Jesus Christ. That's it. It's not marriage, it's not missions, it's not
        any of that. It's to help young adults find Jesus Christ and develop a
        meaningful relationship with Him.
      </q>
      <em>- Robert Ferrell</em>
    </Card>
  );
};

export default Purpose;
