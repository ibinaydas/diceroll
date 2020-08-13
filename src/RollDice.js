import React from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends React.Component {
    static defaultProps = {
        count: 1
    };

    constructor(props) {
        super(props);
        this.state = this.getDieState();
        this.handleClick = this.handleClick.bind(this);
    }

    getDieState() {
        const dieList = [];
        const dieValues = ['one', 'two', 'three', 'four', 'five', 'six'];
        const count = this.props.count;
        for (let i = 0; i < count; i++) {
            const idx = Math.floor(Math.random() * 6);
            dieList.push({ key: i, value: dieValues[idx] });
        }
        return { dieList };
    }

    handleClick() {
        this.setState({ isRolling: true, ...this.getDieState() });
        setTimeout(() => {
            this.setState({ isRolling: false });
        }, 1500);
    }

    render() {
        const dieItems = this.state.dieList.map(item => <Die key={item.key} value={item.value} isRolling={this.state.isRolling} />);
        return (
            <div className='RollDice'>
                <div style={{ textAlign: 'center' }}>
                    {dieItems}
                </div>
                <button className='RollDice-button' disabled={this.state.isRolling} onClick={this.handleClick}>{this.state.isRolling ? 'Dice Rolling...' : 'Roll Dice'}</button>
            </div>
        );
    }
}

export default RollDice;