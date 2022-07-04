import { createContext, useContext, useEffect, useState } from "react";
import { ContextProviderType } from "../@types/context-provider.type";
import { Journal, JournalContextType } from "../@types/journal.context.type";
import { collection, orderBy, onSnapshot, query, addDoc, serverTimestamp, where } from "firebase/firestore";
import { db } from "../utilities/firebase.utilities";
import { UserContext } from "./user.context";

export const JournalContext = createContext<JournalContextType | null>(null);

export const JournalContextProvider = ({ children }: ContextProviderType) => {
  const [journals, setJournals] = useState<Journal[]>([]);
  const auth = useContext(UserContext);

  useEffect(() => {
    onSnapshot(query(collection(db, "journals"), where("uid", "==", auth?.user?.uid)), (snapshot) => {
      setJournals(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          negativeThoughts: doc.data().negativeThoughts,
          cognitiveError: doc.data().cognitiveError,
          rationalAlternative: doc.data().rationalAlternative,
          dateCreated: doc.data().dateCreated,
          uid: doc.data().uid
        }))
      )
    })
  }, [auth?.user]);

  const addNewEntry = (title: string, negativeThoughts: string, cognitiveError: string, rationalAlternative: string) => {
    const userId = auth?.user?.uid;
    
    if(!userId) return;

    addDoc(collection(db, "journals"), {
      title,
      negativeThoughts,
      cognitiveError,
      rationalAlternative,
      dateCreated: serverTimestamp(),
      uid: userId
    })
  }

  return (
    <JournalContext.Provider
      value={{
        journals,
        addNewEntry
      }}
    >
      {children}
    </JournalContext.Provider>
  )
}