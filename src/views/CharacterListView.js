import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";

import { characterNames } from "../actions/index"; //const characterNames from actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action const
    this.props.characterNames(); 
  }

  render() {
    if (this.props.fetching) {
      // mapStateToProps 
      // return something here to indicate that you are fetching data
      return <h1> Please wait....we are fetching data!!</h1>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} /> 
        {/* for this.props.characters value refer to mapStateToProps */}
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = (state) => ({
  characters: state.charsReducer.characters, //specifying which reducer to use from the reducers folder 
  fetching: state.charsReducer.fetching,
  error: state.charsReducer.error
});

export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  { characterNames } /* action creators go here */
)(CharacterListView);
