import React, { Component } from 'react'

export default class List extends Component {
    displayItem = (player) => {
        this.props.displayPlayer(player);
    }

    render() {
        const listItemStyle = {cursor:'pointer'};
        var playerList = this.props.playerList;
        return (
            <ul className='list-group'>
                {playerList.map((player) => (<li onClick={() => this.displayItem(player)} className='list-group-item' style={listItemStyle}>{player.first_name} {player.last_name}</li>))}
            </ul>
        )
    }
}
