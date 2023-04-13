import { api } from './axios'

export function postPost(username: string, title: string, content: string) {
  return api.post('', {
    username,
    title,
    content,
  })
}
