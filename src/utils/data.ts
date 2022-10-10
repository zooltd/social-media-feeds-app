import { Post, User, UserInfo } from '../constants/types'
import axios from 'axios'

const USERS = 'https://jsonplaceholder.typicode.com/users'
const USER_POSTS = 'https://jsonplaceholder.typicode.com/posts'
const IMAGE = 'https://picsum.photos/id'
const AVATAR = 'https://i.pravatar.cc'

const getUserImageUrl = (userId: number | string, size: number | string): string => {
  return `${AVATAR}/${size}?img=${userId}`
}

const getUserImageUrlByUUID = (uuid: string, size: number | string): string => {
  return `${AVATAR}/${size}?u=${uuid}`
}

const getPostImageUrl = (postId: string, width: number | string, height: number | string): string => {
  return `${IMAGE}/${postId}/${width}/${height}`
}

const randomDateTime = (start: Date, end: Date): Date => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

export const getPostsByUserIds = async (userIds: string[]): Promise<Post[]> => {
  const postUrls = userIds.map(userId => `${USER_POSTS}?userId=${userId}`)
  const posts = await Promise.all(postUrls.map(async url => await axios.get<Post[]>(url).then(res => res.data)))

  const users = await getUsersByUserIds(userIds)
  const userId2Username = new Map(users.map(user => [user.id, user]))

  const retPosts = posts.flat()
  retPosts.forEach((p, i) => {
    if ((i + 1) % 10 <= 3 || Math.random() < 0.5) {
      p.image = getPostImageUrl(p.id, 400, 250)
    }
    p.user = userId2Username.get(p.userId) ?? defaultUser
    p.timestamp = +randomDateTime(new Date(2000, 1, 1), new Date())
  })
  return retPosts
}

const isTmpUser = (userId: string): boolean => localStorage.getItem(userId) !== null

export const getUserByUserId = async (userId: string): Promise<User> => {
  if (isTmpUser(userId)) return JSON.parse(localStorage.getItem(userId) ?? '{}')
  const { data } = await axios.get<UserInfo[]>(`${USERS}?id=${userId}`)
  const u = data[0]
  return (u !== undefined)
    ? {
        id: u.id,
        avatar: getUserImageUrl(u.id, 150),
        username: u.username,
        status: u.company.catchPhrase,
        email: u.email,
        phone: u.phone,
        zipcode: u.address.zipcode
      }
    : defaultUser
}

export const getUsersByUserIds = async (userIds: string[]): Promise<User[]> => {
  return await Promise.all(userIds.map(async userId => await getUserByUserId(userId)))
}

export const getFollowingUserIds = async (userId: string | number): Promise<string[]> => {
  const rng = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min
  const { data } = await axios.get<User[]>(USERS)
  const mod = data.length
  if (+userId === 0) return [rng(1, mod).toString()]
  if (isTmpUser(userId.toString())) return [rng(1, mod).toString()]
  return +userId <= 10 ? [0, 1, 2].map(offset => ((+userId + offset) % mod + 1).toString()) : []
}

export const authenticateUser = async (username: string, password: string): Promise<User | null> => {
  const getUserByUsername = async (username: string): Promise<UserInfo | null> => {
    const { data } = await axios.get<UserInfo[]>(`${USERS}?username=${username}`)
    return (data.length > 0) ? data[0] : null
  }
  const returnUser = await getUserByUsername(username)
  return (returnUser != null) && (returnUser.address.street === password)
    ? {
        id: returnUser.id,
        avatar: getUserImageUrl(returnUser.id, 150),
        username: returnUser.username,
        status: returnUser.company.catchPhrase,
        email: returnUser.email,
        phone: returnUser.phone,
        zipcode: returnUser.address.zipcode
      }
    : null
}

export const CreateUser = async (username: string, email: string): Promise<User> => {
  const { data } = await axios.post<UserInfo>(USERS, {
    username,
    email
  })
  const uuid = crypto.randomUUID()
  return {
    ...defaultUser, ...data, id: uuid, avatar: getUserImageUrlByUUID(uuid, 150)
  }
}

export const CreatePost = async (user: User, imageUrl: string | undefined, postBody: string, timestamp: number): Promise<Post> => {
  const { data } = await axios.post<Post>(USER_POSTS, {
    body: postBody,
    userId: user.id
  })
  return {
    ...emptyPost, ...data, user, image: imageUrl, timestamp
  }
}

export const defaultUser: User = {
  id: '0',
  avatar: 'https://ui-avatars.com/api/?size=150&name=YW',
  username: 'Unknown Username',
  status: 'Unknown Status',
  email: 'Unknown Email Address',
  phone: 'Unknown Phone Number',
  zipcode: 'Unknown ZIP code'
}

export const emptyPost: Post = {
  userId: '0',
  id: '0',
  body: 'empty',
  user: defaultUser,
  timestamp: +new Date(0)
}
