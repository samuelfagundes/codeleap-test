import { useState } from 'react'
import './styles.scss'

export function SignUpBox() {
  const [username, setUsername] = useState('')
  function handleSignIn() {
    localStorage.setItem('codeLeapNetwork username', JSON.stringify(username))
  }

  return (
    <form className="box" onSubmit={handleSignIn}>
      <h1>Welcome to CodeLeap network!</h1>
      <div className="usernameInput">
        <span>Please enter your username:</span>
        <input
          type="text"
          placeholder="John doe"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
        />
      </div>
      <div className="buttonContainer">
        <button
          type="submit"
          className={`${username === '' ? 'disableButton' : ''}`}
        >
          Enter
        </button>
      </div>
    </form>
  )
}
