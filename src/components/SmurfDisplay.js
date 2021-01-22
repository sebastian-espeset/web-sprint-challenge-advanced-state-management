import React from "react";
import { connect } from "react-redux";
import { fetchSmurf } from "../actions/index";
import Smurf from "./Smurf";

export class SmurfDisplay extends React.Component {
  constructor(props) {
    super();
}
componentDidMount() {
    this.props.dispatch(fetchSmurf());
    // console.log(this.props)
  }
// componentDidUpdate(){
//     console.log("updating smurf display",this.props.smurfs)
// }
  render() {
    return (
      <div>
      {this.props.smurfs.map((smurf)=>{
          return <Smurf
            name={smurf.name}
            description={smurf.description}
            position={smurf.position}
            nickname={smurf.nickname}
            />
      })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { fetchSmurf })(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.
