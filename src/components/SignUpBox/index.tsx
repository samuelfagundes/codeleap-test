import { useEffect, useState } from 'react'
import './styles.scss'
import { useNavigate } from 'react-router-dom'

export function SignUpBox() {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()
  const storedUsername = localStorage.getItem('codeLeapNetwork username')

  useEffect(() => {
    if (storedUsername) {
      navigate('/mainScreen')
    }
  }, [navigate, storedUsername])

  function handleSignIn() {
    localStorage.setItem('codeLeapNetwork username', JSON.stringify(username))

    navigate('/mainScreen')
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
