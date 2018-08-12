import React from 'react'
import Field from '../field/Field'

class Bio extends React.Component {
  render() {
    const { name, ancestry, size, background, $class, level, xp, alignment, deity, age, gender, languages } = this.props.bio

    return (
      <div className="bio">
        <Field id="name" placeholder="Character name" value={name} />
        <Field id="ancestry" placeholder="Ancestry" value={ancestry} />
        <Field id="size" placeholder="Size" value={size} />
        <Field id="background" placeholder="Background" value={background} />
        <Field id="class" placeholder="Class" value={$class} />
        <Field id="level" placeholder="Level" value={level} onChange={this.props.onChangeLevel} />
        <Field id="xp" placeholder="Experience points (XP)" value={xp} onChange={this.props.onChangeExperiencePoints} />
        <Field id="alignment" placeholder="Alignment" value={alignment} />
        <Field id="deity" placeholder="Deity" value={deity} />
        <Field id="age" placeholder="Age" value={age} />
        <Field id="gender" placeholder="Gender" value={gender} />
        <Field id="languages" placeholder="Languages" value={languages.join(', ')} />
      </div>
    )
  }
}

export default Bio
