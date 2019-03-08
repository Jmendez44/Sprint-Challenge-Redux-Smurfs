import React from 'react';
import { getSmurfs } from '../actions';
import { connect } from 'react-redux';
import Smurf from './Smurf';

class SmurfList extends React.Component {
    componentDidMount(){
      this.props.getSmurfs();
    }
  
    render() {
      if (this.props.fetchingSmurfs) {
        return (
          <div className='loading'>
          <h1>Collecting smurfs...</h1>
          </div>
        )
      }
      return (
        <div className='smurf-list'>
      {this.props.smurfs.map(smurf => {
        return (
          <Smurf key={smurf.id} smurf={smurf} />
        )
      })}
      </div>
    )
    }
  }
  
  const mapStateToProps = state => {
    return {
      smurfs: state.smurfs,
      fetchingSmurfs: state.fetchingSmurfs,
    }
  }
  
  export default connect(
    mapStateToProps,
    {
      getSmurfs,
    }
  )(SmurfList)