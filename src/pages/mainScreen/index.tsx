import { useEffect, useState } from 'react'
import { NewPostBox } from '../../components/NewPostBox'
import { PostBox } from '../../components/PostBox'
import './styles.scss'
import { getPosts } from '../../actions/getPosts'

interface Posts {
  count: number | undefined
  next: string | undefined
  previous: string | null
  results: {
    id: number
    username: string
    created_datetime: string
    title: string
    content: string
  }[]
}

export function MainScreen() {
  const [posts, setPosts] = useState<Posts | undefined>()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const username = localStorage.getItem('codeLeapNetwork username') ?? ''

  useEffect(() => {
    getPosts().then((response) => setPosts(response.data))
  }, [])

  function changeTitle(text: string) {
    setTitle(text)
  }

  function changeContent(text: string) {
    setContent(text)
  }

  function deletePost(id: number) {
    if (posts) {
      const filterPost = posts.results.filter((post) => post.id !== id)
      const newPosts: Posts = {
        ...posts,
        results: filterPost,
      }
      setPosts(newPosts)
      console.log(newPosts)
    }
  }

  return (
    <main className="pageContainer">
      <div className="header">
        <h1>CodeLeap Network</h1>
      </div>
      <div className="dashboardContainer">
        <NewPostBox
          username={username}
          setContent={changeContent}
          setTitle={changeTitle}
          title={title}
          content={content}
        />

        {posts?.results.map((post) => {
          return (
            <PostBox
              key={post.id}
              id={post.id}
              deletePost={deletePost}
              username={post.username}
              storedUsername={username}
              title={post.title}
              content={post.content}
              created_datetime={post.created_datetime}
              setContent={changeContent}
              setTitle={changeTitle}
            />
          )
        })}
      </div>
    </main>
  )
}
