import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
  render() {
    console.log(this.props);
    const { name } = this.props.employee.item;

    return (
      <View>
      <CardSection>
        <Text style={styles.titleStyle}> { name } </Text>
      </CardSection>
      </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;