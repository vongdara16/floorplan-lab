import Bath from "./Bath";
import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";

const Floorplan = (props) => {
  return (
    <div className="floorplan">
      <Bedroom bedNum={1} />
      <Kitchen />
      <LivingRoom />
      <Bath size={'Half'}/>
      <Bedroom bedNum={2} />
      <Bedroom bedNum={3} />
      <Bath size={'Full'}/>
    </div>
  );
}

export default Floorplan;