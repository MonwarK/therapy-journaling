import { Timestamp } from "firebase/firestore"

export interface JournalContextType {
  journals: Journal[],
  addNewEntry: (title: string, negativeThoughts: string, cognitiveError: string, rationalAlternative: string) => void
}

export interface Journal {
  id: string,
  title: string,
  negativeThoughts: string,
  cognitiveError: string,
  rationalAlternative: string,
  dateCreated: Timestamp,
  uid: string
}