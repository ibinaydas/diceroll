import React from 'react';
import './Die.css';

class Die extends React.Component {
    static defaultProps = {
        value: 'one',
        isRolling: false
    };
    render() {
        const dieClass = 'Die fas fa-dice-' + this.props.value + (this.props.isRolling ? ' Die-rolling' : '');
        return (
            <i className={dieClass}></i>
        );
    }
}

export default Die;