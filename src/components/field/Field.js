import React from 'react'

const Field = ({ id, placeholder, value, onChange }) => (
  <div className="field">
    <label htmlFor={id}>{placeholder}:</label>
    <input type="text" id={id} name={id} placeholder={placeholder} value={value} onChange={onChange} />
  </div>
)

export default Field
