import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <div class="form-group">
                <label for="info-type-select">Search for...</label>
                <select class="form-control" id="info-type-select">
                    <option>Player</option>
                    <option>Team</option>
                </select>
            </div>
        )
    }
}
