import React from 'react'
import { calculateAbilityScoreModifier, calculateProficiencyModifier } from '../../utils/calculations'

class Senses extends React.Component {
  calculatePerception = (wisdom, teml, level) => {
    return calculateAbilityScoreModifier(wisdom) + calculateProficiencyModifier(teml, level)
  }

  render() {
    const { wisdom, level } = this.props
    const { proficiencyRank } = this.props.perception
    return (
      <div className="senses">
        <h3>Senses</h3>
        <div className="perception">
          <h4>Perception</h4>
          <input type="text" value={this.calculatePerception(wisdom, proficiencyRank, level)} />
          <label>Wis</label>
          <input type="text" value={calculateAbilityScoreModifier(wisdom)} />
          {/* TODO: TEML */}
          <label>Prof</label>
          <input type="text" value={calculateProficiencyModifier(proficiencyRank, level)} />
          {/* <label>Item</label>
          <input type="text" /> */}
        </div>
      </div>
    )
  }
}

export default Senses
