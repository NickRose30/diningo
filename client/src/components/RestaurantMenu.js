import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styled from 'styled-components';
import { colorDefaultDarkOrange } from '../vars';

const MenuTabs = styled(Tabs)`
  color: ${colorDefaultDarkOrange};
`;

class RestaurantMenu extends Component {
  componentDidMount() {
    console.log('mounted');
  }

  render() {
    return (
      <MenuTabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
          <Tab>Title 2</Tab>
          <Tab>Title 2</Tab>
          <Tab>Title 2</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </MenuTabs>
    );
  }
}

export default RestaurantMenu;