// Code EyesOnMe Component Here

const EyesOnMe = (props) => {
  let click = {props}
  return (
      <div>
          <input type="password" onClick={props.handleClick} />
          <button onClick={() => props.onClick(props >= [1])}>Hey! Eyes on me!</button>
          
      </div>
  );
};

export default EyesOnMe;