import React from 'react'
import { calculateAbilityScoreModifier } from '../../utils/calculations'

class AbilityScores extends React.Component {
  renderAbilityScore = (name, abbreviation, abilityScore) => (
    <div className={name.toLowerCase()}>
      <h3>{name}</h3>
      <label>{abbreviation}</label>
      <label>Modifier</label>
      <input type="text" value={calculateAbilityScoreModifier(abilityScore)} />
      <label>Score</label>
      <input type="text" value={abilityScore} />
    </div>
  )

  render() {
    const { strength, dexterity, constitution, intelligence, wisdom, charisma } = this.props.abilityScores
    return (
      <div className="ability-scores">
        <h3>Ability scores</h3>
        <div className="dual">
          {this.renderAbilityScore("Strength", "Str", strength.value)}
          {this.renderAbilityScore("Dexterity", "Dex", dexterity.value)}
        </div>
        <div className="dual">
          {this.renderAbilityScore("Consitution", "Con", constitution.value)}
          {this.renderAbilityScore("Intelligence", "Int", intelligence.value)}
        </div>
        <div className="dual">
          {this.renderAbilityScore("Wisdom", "Wis", wisdom.value)}
          {this.renderAbilityScore("Charisma", "Cha", charisma.value)}
        </div>
      </div>
    )
  }
}

export default AbilityScores
