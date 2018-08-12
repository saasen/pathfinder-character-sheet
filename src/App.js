import React, { Component } from 'react'
import Bio from './components/bio/Bio'
import Core from './components/core/Core'
import Saves from './components/saves/Saves'
import Senses from './components/senses/Senses'

import './App.css'

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
      },
      perception: {
        proficiencyRank: 2
      },
      saves: {
        fortitude: {
          proficiencyRank: 2
        },
        reflex: {
          proficiencyRank: 1
        },
        will: {
          proficiencyRank: 3
        }
      }
    }
  }

  changeExperiencePoints = (event) => {
    this.setState({ ...this.state, bio: { ...this.state.bio, xp: event.target.value } })
  }

  changeLevel = (event) => {
    this.setState({ ...this.state, bio: { ...this.state.bio, level: parseInt(event.target.value) } })
  }

  render() {
    console.log(this.state)
    const { bio } = this.state

    return (
      <div>
        <Bio bio={bio} onChangeExperiencePoints={this.changeExperiencePoints} onChangeLevel={this.changeLevel} />
        <Core level={this.state.bio.level} abilityScores={this.state.abilityScores} core={this.state.core} />
        <Senses level={this.state.bio.level} perception={this.state.perception} wisdom={this.state.abilityScores.wisdom.value} />
        <Saves level={this.state.bio.level} saves={this.state.saves} constitution={this.state.abilityScores.constitution.value} dexterity={this.state.abilityScores.dexterity.value} wisdom={this.state.abilityScores.wisdom.value} />
      </div>
    );
  }
}

export default App
