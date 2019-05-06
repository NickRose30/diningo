import React, { Component } from 'react';
import * as R from 'ramda';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { withRouter } from 'react-router-dom';
import 'css/react-tabs.css';
import styled from 'styled-components';
import MenuItem from './MenuItem';
import OrderAside from './OrderAside';
import { DefaultBtn } from '../../sharedAssets';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CreateOrderBtn = styled(DefaultBtn)`
  margin: 10px 0 0 auto;
`;

const Menu = styled(Tabs)`
  width: 100%;
`;

const ContentPanel = styled(TabPanel)`
  margin: 0 15px;
`;

const MenuOrderContainer = styled.div`
  display: flex;
  width: 100%;
  padding-top: 25px;
`;

class RestaurantMenu extends Component {
  state = {
    menu: {},
    selectedIndex: 0,
    orderInProgress: false,
    currentOrder: [],
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

  handleTabSelect = selectedIndex => this.setState({ selectedIndex });

  handleAddMenuItem = item => () => {
    const currentOrder = this.state.currentOrder.slice();
    currentOrder.push(item);
    this.setState({ currentOrder });
  }

  handleCreateOrder = e => {
    e.preventDefault();
    this.setState({ orderInProgress: true });
  }

  handleCloseOrderAside = () => this.setState({ orderInProgress: false });

  toTabPanel = (val, key) => {
    const contents = val.map((menuItem, i) => (
      <MenuItem 
        {...menuItem} 
        showAddBtn={this.state.orderInProgress}
        addItemToOrder={this.handleAddMenuItem}
        key={i} 
      />
    ));
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
      <Container>
        <CreateOrderBtn to='#' onClick={this.handleCreateOrder}>
          Place an order
        </CreateOrderBtn>
        <MenuOrderContainer>
          <Menu
            selectedIndex={this.state.selectedIndex}
            onSelect={this.handleTabSelect}
          >
            <TabList>{TabHeaders}</TabList>
            {TabContents}
          </Menu>
          {this.state.orderInProgress && 
            <OrderAside 
              handleClose={this.handleCloseOrderAside}
              items={this.state.currentOrder}
            />}
        </MenuOrderContainer>
      </Container>
    );
  }
}

export default withRouter(RestaurantMenu);