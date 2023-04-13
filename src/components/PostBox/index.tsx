import { MdDeleteForever } from 'react-icons/md'
import { BiEdit } from 'react-icons/bi'
import { formatDistanceToNow } from 'date-fns'
import './styles.scss'
import { DeleteModal } from '../DeleteModal'
import { EditModal } from '../EditModal'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

interface PostProps {
  username: string
  id: number
  storedUsername: string
  title: string
  content: string
  created_datetime: string
  deletePost: (id: number) => void
  setTitle: (text: string) => void
  setContent: (text: string) => void
}

export function PostBox({
  username,
  id,
  deletePost,
  storedUsername,
  title,
  content,
  created_datetime,
  setTitle,
  setContent,
}: PostProps) {
  return (
    <div className="postContainer">
      <div className="postHeader">
        <h2>{title}</h2>
        {JSON.parse(storedUsername) === username && (
          <div className="options">
            <DeleteModal
              id={id}
              deletePost={deletePost}
              button={
                <button>
                  <MdDeleteForever size={30} />
                </button>
              }
            />
            <EditModal
              title={title}
              content={content}
              setContent={setContent}
              setTitle={setTitle}
              id={id}
              button={
                <button>
                  <BiEdit size={30} />
                </button>
              }
            />
          </div>
        )}
      </div>
      <div className="postContent">
        <div className="postInfo">
          <span>@{username}</span>
          <span>
            {formatDistanceToNow(new Date(created_datetime), {
              addSuffix: true,
            })}
          </span>
        </div>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  )
}
