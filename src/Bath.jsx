const Bath = (props) => {
  return (
    <div className="bath" id={`${props.size}-bath`}>
      <h3>{props.size} Bath</h3>
    </div>
  );
}
 
export default Bath;