import React, { Component } from 'react'
import Bio from './components/bio/Bio'
import Core from './components/core/Core'
import Saves from './components/saves/Saves'
import Senses from './components/senses/Senses'
import AbilityScores from './components/abilityScores/AbilityScores'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bio: {
        name: "Grover Steel",
        ancestry: "Human",
        size: "Medium",
        background: "My super-super awesome background",
        $class: "Paladin",
        level: 4,
        experiencePoints: 4000,
        alignment: "Lawful Good",
        deity: "Iomedae",
        age: 32,
        gender: "Female",
        languages: [
          "Common"
        ]
      },
      core: {
        speed: 25,
        heroPoints: 1
      },
      abilityScores: {
        strength: { value: 18, isKeyAbilityScore: true },
        dexterity: { value: 12, isKeyAbilityScore: false },
        constitution: { value: 16, isKeyAbilityScore: false },
        intelligence: { value: 12, isKeyAbilityScore: false },
        wisdom: { value: 14, isKeyAbilityScore: false },
        charisma: { value: 16, isKeyAbilityScore: false }
      },
      perception: {
        proficiencyRank: 1
      },
      saves: {
        fortitude: {
          proficiencyRank: 2
        },
        reflex: {
          proficiencyRank: 1
        },
        will: {
          proficiencyRank: 2
        }
      }
    }
  }

  changeExperiencePoints = (event) => {
    this.setState({ ...this.state, bio: { ...this.state.bio, xp: event.target.value } })
  }

  changeLevel = (event) => {
    this.setState({ ...this.state, bio: { ...this.state.bio, level: parseInt(event.target.value, 10) } })
  }

  render() {
    console.log(this.state)
    const { bio, saves, abilityScores } = this.state

    return (
      <div>
        <Bio bio={bio} onChangeExperiencePoints={this.changeExperiencePoints} onChangeLevel={this.changeLevel} />
        <Core level={this.state.bio.level} abilityScores={abilityScores} core={this.state.core} />
        <Senses level={this.state.bio.level} perception={this.state.perception} wisdom={abilityScores.wisdom.value} />
        <Saves level={this.state.bio.level} saves={saves} constitution={abilityScores.constitution.value} dexterity={abilityScores.dexterity.value} wisdom={abilityScores.wisdom.value} />
        <AbilityScores abilityScores={abilityScores} />
      </div>
    );
  }
}

export default App
