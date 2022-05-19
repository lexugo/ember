import { onSnapshot } from 'firebase/firestore'

export function useSnapshot(reference, callback, dependencies) {
	useEffect(() =>  onSnapshot(reference, callback), dependencies)
}
