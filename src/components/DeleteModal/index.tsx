import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'
import './styles.scss'
import { api } from '../../actions/axios'

interface ModalProps {
  button: ReactNode
  id: number
  deletePost: (id: number) => void
}

export function DeleteModal({ button, id, deletePost }: ModalProps) {
  function handleDelete() {
    api.delete(`${id}/`)
    deletePost(id)
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="deleteDialogTrigger" asChild>
        {button}
      </Dialog.Trigger>
      <Dialog.Overlay className="deleteDialogOverlay" />
      <Dialog.Content className="deleteDialogContent">
        <Dialog.Title className="deleteDialogTitle">
          Are you sure you want to delete this item?
        </Dialog.Title>

        <div className="deleteDialogButtons">
          <Dialog.Close className="deleteDialogCancelButton">
            Cancel
          </Dialog.Close>
          <Dialog.Close
            onClick={handleDelete}
            className="deleteDialogDeleteButton"
          >
            Delete
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  )
}
