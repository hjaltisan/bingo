import React, { Component } from 'react'

class Game extends Component {
    constructor(props) {
        super(props)

        this.state = {
            drawn: [],
        }
    }

    render() {
        console.log('game rendered')
        return (
            <div>
                <div>Game started</div>
                <input placeholder="B3" type="number" min="1" max="75" />
            </div>
        )
    }
}

export default Game
