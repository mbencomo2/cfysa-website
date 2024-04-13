import Card from "../ui/card";
import { signika } from "../ui/fonts";
import { DownArrow } from "../ui/icons";

const Events = () => {
  return (
    <Card>
      <h2 className={`${signika.className} font-bold text-2xl my-2`}>
        Upcoming Events
      </h2>
      <ul className="space-y-4 divide-y-2 divide-accent my-4 max-h-[calc(100vh/2)] overflow-y-auto">
        <li>
          <b>Monday</b> - April April 8th - FHE Verrado Building 7 pm 19322 W
          Indian School RD Litchfield Park, AZ 85340 Come Follow Me message,
          photo scavenger hunt, fruit and bagels with butter or cream cheeses!{" "}
        </li>
        <li>
          <b>Institute</b> - Tues 7 pm Glendale Community College & Thurs 7 pm
          Thomas Building
        </li>
        <li>
          <b>Friday April 12th</b> - Group Game Mafia Mystery, Italian Dinner,
          Fun & More Games. @Griffin’s Home 15124 West Highland Ave Goodyear AZ
          85395
        </li>
        <li>
          <b>Sunday</b> - 1:30 pm Sacrament Meeting Thomas Building 13277 W
          Thomas Rd. GDYR 85395
        </li>
        <li>
          <b>Break The Fast</b> - Theme Mexican Food. Brothers bring Main Dishes
          (taco, enchiladas, nachos etc). Sisters bring appetizers, side dishes
          or dessert.
        </li>
        <li>
          <b>Monday April 15th FHE</b> - Verrado Building 7 pm 19322 W Indian
          School RD Litchfield Park, AZ 85340
        </li>
        <li>
          <b>Institute</b> - Tues 7 pm Glendale Community College & Thurs 7 pm
          Thomas Building
        </li>
        <li>
          <b>Friday April 19th Game Night</b> - Smash Bros Competition 7 pm
        </li>
        <li>
          <b>Sun April 21st Sunday</b> - 1:30 pm Sacrament Meeting Thomas
          Building 13277 W Thomas Rd. GDYR 85395 - 7pm - Elder Christofferson
          Devotional. This will supplant our normal 3d Sunday stake devotional:
          7126 E. McKellips Road in Mesa
        </li>
        <li>
          <b>Monday April 15th FHE</b> - Verrado Building 7 pm 19322 W Indian
          School RD Litchfield Park, AZ 85340
        </li>
        <li>
          <b>Institute</b> - Tues 7 pm Glendale Community College & Thurs 7 pm
          Thomas Building
        </li>
        <li>
          <b>Friday April 26th Game Night</b> - Group Game Burn the House Down @
          Sautter’s Home 23558 W Adams St Buckeye, Arizona 85396-6381
        </li>
        <li>
          <b>Saturday April 27th Sat - 6-10pm</b> - Luau- Multi YSA Stake event
          830 E. Second Ave. in Mesa
        </li>
        <li>
          <b>Sun April 28th Sunday</b> - 1:30 pm Sacrament Meeting Thomas
          Building 13277 W Thomas Rd. GDYR 85395
        </li>
        <li>
          <b>Monday April 29th</b> - FHE Verrado Building 7 pm 19322 W Indian
          School RD Litchfield Park, AZ 85340
        </li>
      </ul>

      <div className="w-full h-1 my-2 bg-accent"></div>

      <h2 className={`${signika.className} font-bold text-2xl my-2`}>
        Coming Up in May
      </h2>
      <ul className="space-y-4 my-4 divide-y-2 divide-accent max-h-[calc(100vh/2)] overflow-y-auto">
        <li>
          <b>5th Sun -5pm</b> - Broadcast for Young Adults Hosted by Salt Lake -
          View at 5250 W. Thunderbird Rd. in Glendale
        </li>
        <li>
          <b>6th Mon - 7pm</b> - Stake FHE Hosted by Westwind YSA Ward 3802 N.
          59th Avenue in Phoenix. Disco Dance!{" "}
        </li>
        <li>
          <b>May 12th Sun</b> - Mother's Day
        </li>
        <li>
          <b>TBD</b> - Stake Sports
        </li>
        <li>
          <b>May 19th Sun - 7pm</b> - 3rd Sunday Stake Devotional 5250 W.
          Thunderbird Rd. in Glendale
        </li>
      </ul>
    </Card>
  );
};

export default Events;
