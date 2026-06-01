import { useState } from 'react'

function TodoInput({ onAdd }) {
  const [inputText, setInputText] = useState('')

  function handleAdd() {
    if (inputText.trim() === '') return
    onAdd(inputText.trim())
    setInputText('')
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleAdd()
  }

  return (
    <div>
      <input
        type="text"
        placeholder="할일을 입력하세요"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button type="button" onClick={handleAdd}>추가</button>
    </div>
  )
}

export default TodoInput
