import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import Bio from './components/bio/Bio'
import Core from './components/core/Core'

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
        level: 2,
        experiencePoints: 2000,
        alignment: "Lawful Neutral",
        deity: "Iomedae",
        age: 78,
        gender: "Male",
        languages: [
          "Common",
          "Dwarvish"
        ]
      },
      core: {
        speed: 25,
        heroPoints: 1
      },
      abilityScores: {
        strength: { value: 18, isKeyAbilityScore: true },
        dexterity: { value: 12, isKeyAbilityScore: false },
        constitution: { value: 14, isKeyAbilityScore: false },
        intelligence: { value: 12, isKeyAbilityScore: false },
        wisdom: { value: 14, isKeyAbilityScore: false },
        charisma: { value: 16, isKeyAbilityScore: false }
      }
    }
  }

  changeExperiencePoints = (event) => {
    console.log(event)
    this.setState({ ...this.state, bio: { ...this.state.bio, xp: event.target.value } })
  }

  render() {
    const { bio } = this.state

    return (
      <div>
        <Bio bio={bio} onChangeExperiencePoints={this.changeExperiencePoints} />
        <Core level={this.state.bio.level} abilityScores={this.state.abilityScores} core={this.state.core} />
      </div>
    );
  }
}

export default App
