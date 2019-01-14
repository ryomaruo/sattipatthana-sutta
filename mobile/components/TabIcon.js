import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

export default class TabIcon extends Component {
    render() {
        const { name, color, style } = this.props;
        
        return (
            <Icon
                style={style ? style : {}}
                name={name}
                size={24}
                color={color}
            />
        );
    }
}

TabIcon.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.string
};