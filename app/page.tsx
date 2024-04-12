import { signika } from "@/components/ui/fonts";
import Image from "next/image";

export default async function Index() {
  // Yes, yes, this is all very unorganized. I just want to get a feel for the structure before creating a bunch of components
  return (
    <div className="relative w-full grid-cols-4 gap-4 px-2 lg:grid">
      <div className="col-span-1">
        <section className="max-h-screen drop-shadow-lg py-8 bg-gradient-to-bl from-gray-300 to-white from-[-60%] w-full my-4 p-2 border-t-[16px] border-b-[16px] border-orange-400 dark:border-orange-400/50">
          <h2 className={`${signika.className} font-medium text-xl my-2`}>
            Upcoming Events
          </h2>
          <ul>
            <li>Place Events Here</li>
          </ul>
        </section>
        <section className="max-h-screen drop-shadow-lg py-8 bg-gradient-to-bl from-gray-300 to-white from-[-60%] w-full my-4 p-2 border-t-[16px] border-b-[16px] border-orange-400 dark:border-orange-400/50">
          <h2 className="mt-4 text-xl font-bold">Activities:</h2>
          <ul className="pl-6 list-disc">
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
          <p className="my-2">
            Join{" "}
            <a
              href="https://www.facebook.com/groups/cottonflowerysa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Friends of Cottonflower YSA
            </a>{" "}
            on Facebook for updates and Institute/Activity Details!
          </p>
          <p className="my-2">
            For updates on YSA Activities by text, send your name and "YSA" to{" "}
            <a href="tel:+6239105168">623-910-5168</a>.
          </p>
        </section>
        <section className="max-h-screen drop-shadow-lg py-8 bg-gradient-to-bl from-gray-300 to-white from-[-60%] w-full my-4 p-2 border-t-[16px] border-b-[16px] border-orange-400 dark:border-orange-400/50">
          <h2
            className={`${signika.className} font-medium text-2xl my-2 border-b-2 border-gray-500 text-center`}
          >
            Cottonflower YSA Ward
          </h2>
          <div className="my-2">
            <b className="text-lg">Thomas Building</b>
            <br />
            <address>13277 West Thomas Rd Goodyear AZ, 85395</address>
          </div>
          <p className="my-2">
            <b className="text-lg">Bishop Troy Shelton</b>
            <br />
            <a href="tel:+6025130986">602-513-0986</a>
          </p>
        </section>
      </div>
      <div className="col-span-3">
        <section className="drop-shadow-lg flex flex-col items-center p-2 py-8 my-4 border-t-[16px] border-b-[16px] border-orange-400 from-[-60%] bg-gradient-to-bl from-gray-300 to-white dark:border-orange-400/50">
          <Image
            src={"/assets/images/cottonField.jpg"}
            width={736}
            height={552}
            className="object-cover w-full h-96"
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
        </section>
        <section className="flex flex-col items-center p-2 py-8 my-4 border-t-[16px] border-b-[16px] border-orange-400 drop-shadow-lg bg-gray-300 dark:border-orange-400/50">
          <h2 className="self-start text-xl font-bold">COME JOIN US!</h2>
          <p className="my-2">
            Our goal is that every 18-30 year old single adult in the
            Cottonflower YSA Ward boundaries is an active participant in the
            Church of Jesus Christ of Latter Day Saints young single adult (YSA)
            community by participating in activities, Sunday worship, or both.
          </p>
          <p className="my-2">
            We see the benefits of gathering with other young adults in your
            same stage of life. We challenge you to try being a part of our
            community for a month, give us a chance to meet you, and give
            yourself a change to get to know other YSAs in the area.
          </p>
          <p>See you soon!</p>
          <em>- Cottonflower Bishopric</em>
        </section>
        <section className="flex flex-col items-center p-2 py-8 my-4 border-b-[16px] border-orange-400 drop-shadow-lg bg-gradient-to-bl from-[-60%] from-gray-300 to-white dark:border-orange-400/50">
          <div className="h-[128px] w-[256px] bg-orange-400 dark:bg-orange-400/50">
            Place map of ward boundaries here.
          </div>
          <h2 className="my-2 text-xl font-bold">
            Cottonflower YSA Ward Boundaries:
          </h2>
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
          <strong className="my-8 text-2xl">
            We can't build a bigger, stronger community of YSAs if we don't have
            you - so come to our activities, come to our Sunday meetings, or
            both!
          </strong>
          <p>
            YSA wards are open to all young single adults, age 18 to 30, who
            live within the ward's geographic boundaries. Young single adults
            mau choose to attend the YSA ward or the family ward in which they
            live.
          </p>

          <Image
            src={"/assets/images/church_jesus_christ_lowfidelity_symbol.webp"}
            width={200}
            height={395}
            alt="Logo for the Church of Jesus Christ of Latter-Day Saints"
          />
          <q className="my-2">
            The purpose of a young single adult ward is to help young adults
            find Jesus Christ. That's it. It's not marriage, it's not missions,
            it's not any of that. It's to help young adults find Jesus Christ
            and develop a meaningful relationship with Him.
          </q>
          <em>- Robert Ferrell</em>
        </section>
      </div>
    </div>
  );
}
