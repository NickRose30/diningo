import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as R from 'ramda';

class RestaurantProfile extends Component {
  state = {
    profile: {},
  }

  componentDidMount() {
    const { restaurantId } = this.props.match.params;
    this.props.fetchRestaurantProfile(restaurantId);
  }

  static getDerivedStateFromProps(newProps, state) {
    const newProfile = newProps.profile;
    const oldProfile = state.profile;
    if (newProfile !== oldProfile) {
      return { profile: newProfile };
    }
    else return null;
  }

  render() {
    const {
      image,
      title,
      address,
      description,
      stars,
    } = R.prop('profile', this.state) || {};
    return (
      <div>{title}</div>
    );
  }
} 

export default withRouter(RestaurantProfile);