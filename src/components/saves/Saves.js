import React from 'react'
import { calculateAbilityScoreModifier, calculateProficiencyModifier } from '../../utils/calculations'

class Saves extends React.Component {
  calculateSave = (abilityScore, teml, level) => {
    return calculateAbilityScoreModifier(abilityScore) + calculateProficiencyModifier(teml, level)
  }

  render() {
    const { constitution, dexterity, wisdom, level } = this.props
    const { fortitude, reflex, will } = this.props.saves
    return (
      <div className="saves">
        <h3>Saving throws</h3>
        <div className="fortitude">
          <h4>Fortitude</h4>
          <input type="text" value={this.calculateSave(constitution, fortitude.proficiencyRank, level)} />
          <label>Con</label>
          <input type="text" value={calculateAbilityScoreModifier(constitution)} />
          {/* TODO: TEML */}
          <label>Prof</label>
          <input type="text" value={calculateProficiencyModifier(fortitude.proficiencyRank, level)} />
          {/* <label>Item</label>
          <input type="text" /> */}
        </div>
        <div className="reflex">
          <h4>Reflex</h4>
          <input type="text" value={this.calculateSave(dexterity, reflex.proficiencyRank, level)} />
          <label>Dex</label>
          <input type="text" value={calculateAbilityScoreModifier(dexterity)} />
          {/* TODO: TEML */}
          <label>Prof</label>
          <input type="text" value={calculateProficiencyModifier(reflex.proficiencyRank, level)} />
          {/* <label>Item</label>
          <input type="text" /> */}
        </div>
        <div className="will">
          <h4>Will</h4>
          <input type="text" value={this.calculateSave(wisdom, will.proficiencyRank, level)} />
          <label>Wis</label>
          <input type="text" value={calculateAbilityScoreModifier(wisdom)} />
          {/* TODO: TEML */}
          <label>Prof</label>
          <input type="text" value={calculateProficiencyModifier(will.proficiencyRank, level)} />
          {/* <label>Item</label>
          <input type="text" /> */}
        </div>
      </div>
    )
  }
}

export default Saves
