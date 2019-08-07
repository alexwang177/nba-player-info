import React, { Component } from 'react'

export default class List extends Component {
    render() {
        var playerList = this.props.playerList;
        return (
            <ul className='list-group'>
                <li className='list-group-item'>More than one player found</li>
                {playerList.map((player) => (<li className='list-group-item'>{player.first_name} {player.last_name}</li>))}
            </ul>
        )
    }
}
