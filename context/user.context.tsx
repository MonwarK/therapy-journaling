import { createContext, useEffect, useState } from "react";
import { 
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut as firebaseSignOut, 
  updateProfile, 
  User, 
  UserCredential 
} from "firebase/auth";
import { UserContextType } from "../@types/user.context.type";
import { ContextProviderType } from "../@types/context-provider.type";
import { auth, provider } from "../utilities/firebase.utilities";

export const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider = ({ children }: ContextProviderType) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  }, [])

  const signIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials: UserCredential) => {
        setUser(userCredentials.user);
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const register = (name: string, email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials: UserCredential) => {
        updateProfile(userCredentials.user, {
          displayName: name
        });

        signOut();
        signIn(email, password);        
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(({ user }: UserCredential) => {
        setUser(user);
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const signOut = () => {
    firebaseSignOut(auth)
      .then(() => setUser(null));
  }

  return (
    <UserContext.Provider
      value={{
        user,
        signIn,
        googleSignIn,
        register,
        signOut
      }}
    >
      {children}
    </UserContext.Provider>
  )
}