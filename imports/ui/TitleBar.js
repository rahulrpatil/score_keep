import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
    renderSubtitle() {
        if(this.props.subtitle){
            return  <h1>{this.props.subtitle}</h1>
        }
    }
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                {this.renderSubtitle()}
            </div>
        )
    }
}

TitleBar.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
};

TitleBar.defaultProps = {
    // title: 'Default title'
}
