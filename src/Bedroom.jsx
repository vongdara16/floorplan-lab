const Bedroom = (props) => {
  return (
    <div className="bedroom" id={`bed-${props.bedNum}`}>
      <h3>Bedroom {props.bedNum}</h3>
    </div>
  );
}
 
export default Bedroom;