import React, { Component } from 'react';
import * as R from 'ramda';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { withRouter } from 'react-router-dom';
import 'css/react-tabs.css';
import styled from 'styled-components';
import MenuItem from './MenuItem';

const Menu = styled(Tabs)`
  width: 100%;
  padding-top: 25px;
`;

const ContentPanel = styled(TabPanel)`
  margin: 0 15px;
`;

class RestaurantMenu extends Component {
  state = {
    menu: {},
    selectedIndex: 0,
  }

  componentDidMount() {
    const { restaurantId } = this.props.match.params;
    this.props.fetchMenu(restaurantId);
  }

  static getDerivedStateFromProps(newProps, state) {
    if(!R.equals(newProps.menu, state.menu)) {
      return { menu: newProps.menu };
    }
    return null;
  }

  handleSelect = selectedIndex => this.setState({ selectedIndex });

  toTabPanel = (val, key) => {
    const contents = val.map((menuItem, i) => <MenuItem {...menuItem} key={i} />);
    return <ContentPanel key={key}>{contents}</ContentPanel>;
  }

  capitalize = R.compose(
    R.join(''),
    R.juxt([R.compose(R.toUpper, R.head), R.tail])
  );

  render() {

    const TabHeaders = R.keys(this.state.menu).map((header, i) => (
      <Tab key={i}>{this.capitalize(header)}</Tab>
    ));
    
    const TabContents = R.pipe(
      R.mapObjIndexed(this.toTabPanel),
      R.values,
    )(this.state.menu);

    return (
      <Menu
        selectedIndex={this.state.selectedIndex}
        onSelect={this.handleSelect}
      >
        <TabList>{TabHeaders}</TabList>
        {TabContents}
      </Menu>
    );
  }
}

export default withRouter(RestaurantMenu);