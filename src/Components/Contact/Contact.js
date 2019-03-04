import React from 'react'

const contant = () => {
  console.log('Component %c"contant"', 'color: #5BFFA2', 'loaded');

  return <div>
    <div>
      <input type="text" />
    </div>
    <div>
      <input type="text" />
    </div>
    <div>
      <input type="text" />
    </div>
    <div>
      <textarea></textarea>
    </div>
    <div>
      <button type="submit">SAVE</button>
    </div>
  </div>
}

export default contant
