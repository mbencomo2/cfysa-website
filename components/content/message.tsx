import Card from "../ui/card";

const Message = () => {
  return (
    <Card>
      <h2 className="self-start text-xl font-bold">COME JOIN US!</h2>
      <p className="my-2">
        Our goal is that every 18-30 year old single adult in the Cottonflower
        YSA Ward boundaries is an active participant in the Church of Jesus
        Christ of Latter-Day Saints young single adult (YSA) community by
        participating in activities, Sunday worship, or both.
      </p>
      <p className="my-2">
        We see the benefits of gathering with other young adults in your same
        stage of life. We challenge you to try being a part of our community for
        a month, give us a chance to meet you, and give yourself a change to get
        to know other YSAs in the area.
      </p>
      <p>See you soon!</p>
      <em>- Cottonflower Bishopric</em>
    </Card>
  );
};

export default Message;
