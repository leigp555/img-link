import { defineStore } from 'pinia'

interface User {
  username: string
  email: string
  password: string
  login_status: boolean
}

export const useProfileStore = defineStore('user_profile', {
  state: (): User => {
    return {
      username: '',
      email: '',
      password: '',
      login_status: false
    }
  },
  getters: {},
  actions: {}
})
