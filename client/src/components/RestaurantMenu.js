import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'css/react-tabs.css';
import styled from 'styled-components';
import { colorDefaultDarkOrange } from '../vars';

const Menu = styled(Tabs)`
  width: 100%;
  padding-top: 25px;
`;

class RestaurantMenu extends Component {
  componentDidMount() {
    console.log('mounted');
  }

  render() {
    return (
      <Menu>
        <TabList>
          <Tab>Appetizers</Tab>
          <Tab>Pasta</Tab>
          <Tab>Seafood</Tab>
          <Tab>Sandwiches</Tab>
          <Tab>Sides</Tab>
          <Tab>Drinks</Tab>
          <Tab>Desserts</Tab>
        </TabList>

        <TabPanel>
          <span>Shrimp Scampi</span>
          <p>
            This is the description of the meal that you are about to
            consume.{' '}
          </p>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Menu>
    );
  }
}

export default RestaurantMenu;