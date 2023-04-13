import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode, useState } from 'react'
import './styles.scss'
import { api } from '../../actions/axios'

interface ModalProps {
  button: ReactNode
  id: number
  title: string
  content: string
  setTitle: (text: string) => void
  setContent: (text: string) => void
}

export function EditModal({
  button,
  id,
  setContent,
  setTitle,
  title,
  content,
}: ModalProps) {
  const [newTitle, setNewTitle] = useState(title)
  const [newContent, setNewContent] = useState(content)

  function handleUpdate() {
    api
      .patch(`${id}/`, {
        title: newTitle,
        content: newContent,
      })
      .then(() => location.reload())
      .catch((error) => console.error(error))
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="editDialogTrigger" asChild>
        {button}
      </Dialog.Trigger>
      <Dialog.Overlay className="editDialogOverlay" />
      <Dialog.Content className="editDialogContent">
        <Dialog.Title className="editDialogTitle">Edit item</Dialog.Title>
        <form className="editDialogForm">
          <div>
            <span>Title</span>
            <input
              placeholder="Hello world"
              defaultValue={title}
              onChange={(e) => setNewTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <span>Content</span>
            <textarea
              placeholder="Content here"
              defaultValue={content}
              onChange={(e) => setNewContent(e.target.value)}
              required
            />
          </div>
          <div className="editDialogButtons">
            <Dialog.Close className="editDialogCancelButton">
              Cancel
            </Dialog.Close>
            <Dialog.Close
              onClick={handleUpdate}
              className={`editDialogSaveButton`}
            >
              Save
            </Dialog.Close>
          </div>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  )
}
