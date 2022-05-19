import { memoized } from 'neon'
import { where } from 'firebase/firestore'

// Export hooks
export { getFirestore as useFirestore } from 'firebase/firestore'

export { default as useSnapshot } from './hooks/useSnapshot'
export { default as useCollection } from './hooks/useCollection'
export const useConstraint = memoized(where)
