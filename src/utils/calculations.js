export function calculateAbilityScoreModifier(abilityScore) {
  return (abilityScore - 10) / 2
}

export function calculateProficiencyModifier(teml, level) {
  return calculateTeml(teml) + level
}

function calculateTeml(teml) {
  switch (teml) {
    case 1:
      return 0
    case 2:
      return 1
    case 3:
      return 2
    case 4:
      return 3
    default:
      return -2
  }
}