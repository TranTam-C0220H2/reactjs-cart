import React from 'react';
import { connect } from 'react-redux';

function Message(props) {
  return (
      <div className="row mt-4">
          <div className="col-sm-12">
          <h3 className="text-success float-left">{props.message}</h3>
          </div>
      </div> 
  );
}

const mapStateToProps = state => {
  return {
    message : state.message
  }
}

export default connect(mapStateToProps,null)(Message);
