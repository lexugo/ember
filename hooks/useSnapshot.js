import { onSnapshot } from 'firebase/firestore'

import { useEffect } from 'react'

export default function useSnapshot(reference, callback, dependencies) {
	useEffect(() =>  onSnapshot(reference, callback), dependencies)
}
