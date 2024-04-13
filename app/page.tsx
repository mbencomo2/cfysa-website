import Columns from "@/components/ui/gridLayout";
import Events from "@/components/content/events";
import Activities from "@/components/content/activities";
import Info from "@/components/content/wardInfo";
import Hero from "@/components/content/hero";
import Message from "@/components/content/message";
import Purpose from "@/components/content/purpose";

export default async function Index() {
  return (
    <Columns>
      <div className="col-span-1">
        <Events />
        <Activities />
      </div>
      <div className="col-span-3">
        <Hero />
        <Message />
        <Info />
        <Purpose />
      </div>
    </Columns>
  );
}
