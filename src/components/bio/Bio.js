import React from 'react'

class Bio extends React.Component {

  calculateLevel = xp => {
    if (!xp) {
      return 1
    }

    if (xp < 1000) return 1

    return xp / 1000
  }

  render() {
    const { name, ancestry, size, background, $class, xp, alignment, deity, age, gender, languages } = this.props.bio
    console.log(this.props)

    return (
      <div className="bio">
        <Field id="name" placeholder="Character name" value={name} />
        <Field id="ancestry" placeholder="Ancestry" value={ancestry} />
        <Field id="size" placeholder="Size" value={size} />
        <Field id="background" placeholder="Background" value={background} />
        <Field id="class" placeholder="Class" value={$class} />
        <Field id="level" placeholder="Level" value={this.calculateLevel(xp)} />
        <Field id="xp" placeholder="Experience points (XP)" value={xp} onChange={this.props.onChangeXp} />
        <Field id="alignment" placeholder="Alignment" value={alignment} />
        <Field id="deity" placeholder="Deity" value={deity} />
        <Field id="age" placeholder="Age" value={age} />
        <Field id="gender" placeholder="Gender" value={gender} />
        <Field id="languages" placeholder="Languages" value={languages.join(', ')} />
      </div>
    )
  }
}

const Field = ({ id, placeholder, value, onChange }) => (
  <div>
    <label htmlFor={id}>{placeholder}:</label>
    <input type="text" id={id} name={id} placeholder={placeholder} value={value} onChange={onChange} />
  </div>
)

export default Bio
