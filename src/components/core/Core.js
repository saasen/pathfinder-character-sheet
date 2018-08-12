import React from 'react'
import Field from '../field/Field'

class Core extends React.Component {
  calculateClassDC = () => {
    return 10 + this.props.level + this.calculateAbilityScoreModifier(this.findKeyAbilityScore())
  }

  findKeyAbilityScore = () => {
    for (const abilityScore in this.props.abilityScores) {
      if (this.props.abilityScores[abilityScore].isKeyAbilityScore) {
        console.log(this.props.abilityScores[abilityScore].value)
        return this.props.abilityScores[abilityScore].value
      }
    }
  }

  calculateAbilityScoreModifier = abilityScore => {
    // TODO: If ability score is higher than 18. Scale with 1 instead of 2.
    return (abilityScore - 10) / 2
  }

  render() {
    const { level } = this.props
    const { speed, heroPoints } = this.props.core

    return (
      <div className="core">
        <Field id="speed" placeholder="Speed (feet)" value={speed} />
        <div className="class-dc">
          <h3>Class DC</h3>
          <input type="text" placeholder="DC" value={this.calculateClassDC()} />
          <label>{level}</label>
          <input type="text" placeholder="Key" value={this.calculateAbilityScoreModifier(this.findKeyAbilityScore())} />
        </div>

        <input type="text" placeholder="Hero points" value={heroPoints} />
      </div>
    )
  }
}

export default Core
