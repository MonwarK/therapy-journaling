import { User } from "firebase/auth";

export interface UserContextType {
  user: User | null,
  signIn: (email: string, password: string) => void,
  googleSignIn: () => void,
  register: (name: string, email: string, password: string) => void,
  signOut: () => void
}