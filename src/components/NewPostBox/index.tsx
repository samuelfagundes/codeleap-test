import { FormEvent } from 'react'
import './styles.scss'
import { api } from '../../actions/axios'

interface PostProps {
  username: string
  title: string
  content: string
  setTitle: (text: string) => void
  setContent: (text: string) => void
}

export function NewPostBox({
  username,
  title,
  setTitle,
  content,
  setContent,
}: PostProps) {
  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    await api
      .post('', {
        username: JSON.parse(username),
        title,
        content,
      })
      .then(() => location.reload())
      .catch(function (error) {
        console.log(error)
      })

    setTitle('')
    setContent('')
  }

  return (
    <form className="newPost" onSubmit={handleSubmit}>
      <h2>What’s on your mind?</h2>
      <div className="titleInput">
        <span>Title</span>
        <input
          type="text"
          placeholder="Hello world"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="contentInput">
        <span>Content</span>
        <textarea
          placeholder="Content here"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        ></textarea>
      </div>
      <div className="buttonContainer">
        <button
          type="submit"
          className={`${title === '' || content === '' ? 'disableButton' : ''}`}
        >
          Create
        </button>
      </div>
    </form>
  )
}
