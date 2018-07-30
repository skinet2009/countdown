import React, { Component } from "react";
import { connect } from 'react-redux';
import "./listitem.css";


import {loadItem} from '../../actions/itemActions';

// What parts of store are available to the component
const mapStateToProps = state => ({
    item: state.item
  });
  
  // What actions are available to the component
  const mapDispatchToProps = dispatch => ({
    // available in Forecast class as this.props.loadForecast()
    loadItem: item => dispatch(loadItem(item))
    // ** ADD CLEAR_FORECAST
  });


class ListItem extends Component {

    fetch = (hello) => {
        this.props.loadForecast({
            name: hello
        });
    }


  componentDidMount() {
    fetch('hello');
  }

  render() {
    const {stuff} = this.props;
    
    var date_future = new Date(stuff.date);

    var date_now = Date.now();

    // get total seconds between the times
    var delta = Math.abs(date_future - date_now) / 1000;

    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;

    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    // calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    return (
            <article>
                <div className="title">
                    <h3>COUNTDOWN TO</h3>
                    <h1>{stuff.name}</h1>
                </div>
                <div className="countdown">
                    <div className="countdown-inner">
                        <div className="count days">
                            <h2>{days}</h2>
                            <h4>DAYS</h4>
                        </div>
                        <h2 className="seperator">:</h2>
                        <div className="count hours">
                            <h2>{hours}</h2>
                            <h4>HOUR</h4>
                        </div>
                        <h2 className="seperator">:</h2>
                        <div className="count mins">
                            <h2>{minutes}</h2>
                            <h4>MINS</h4>
                        </div>
                    </div>
                </div>
                <div className="btn-bar">
                    <div className="btn-bar-child view-btn">VIEW</div>
                    <div className="btn-bar-child edit-btn">EDIT</div>
                </div>
            </article>
        )
  }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ListItem);
  