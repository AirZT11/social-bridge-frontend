import { createSlice } from "@reduxjs/toolkit"

interface User {
  _id: string
  firstName: string
  lastName: string
  email: string
  picturePath: string
  friends: string[]
  location: string
  occupation: string
  viewedProfile: number
  impressions: number
  timestamp: string
}

interface Post {
  _id: string
  userId: string
  firstName: string
  lastName: string
  location: string
  description: string
  picturePath: string
  userPicturePath: string
  likes: {
    id: boolean
  }
  comments: any[]
  timestamp: string
}

export type ThemeMode = "light" | "dark"

interface InitialState {
  mode: ThemeMode
  user: User | null
  token: string | null
  posts: Post[]
}

const initialState: InitialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light"
    },
    setLogin: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
    },
    setLogout: (state) => {
      state.user = null
      state.token = null
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload
      } else {
        console.error("user friends non-existent : (")
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post_id) return action.payload.post
        return post
      })
      state.posts = updatedPosts
    },
  },
})

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions
export default authSlice.reducer
