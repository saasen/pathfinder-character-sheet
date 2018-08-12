import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import Bio from './components/bio/Bio'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bio: {
        name: "Muradin Bronzebeard",
        ancestry: "Dwarf",
        size: "Medium",
        background: "My super-super awesome background",
        $class: "Cleric",
        xp: 2000,
        alignment: "Lawful Neutral",
        deity: "Iomedae",
        age: 78,
        gender: "Male",
        languages: [
          "Common",
          "Dwarvish"
        ]
      }
    }
  }

  changeXp = (event) => {
    console.log(event)
    this.setState({ ...this.state, bio: { ...this.state.bio, xp: event.target.value } })
  }

  render() {
    const { bio } = this.state

    return (
      <div>
        <Bio bio={bio} onChangeXp={this.changeXp} />
        <div className="core">
          <input type="text" placeholder="Speed (feet)"/>
          <div className="class-dc">
            <h3>Class DC</h3>
            <input type="text" placeholder="DC"/>
            <p>10 +</p>
            <input type="text" placeholder="Level"/>
            <input type="text" placeholder="Key"/>
          </div>

          <input type="text" placeholder="Hero points"/>
        </div>
      </div>
    );
  }
}

export default App
