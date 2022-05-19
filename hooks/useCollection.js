import { getFirestore, collection, query } from 'firebase/firestore'

import { useSnapshot } from './useSnapshot'

export function useCollection(path, ...constraints) {
	const firestore = getFirestore()
	const reference = useMemo(() => constraints.length !== 0
		? query(collection(firestore, path), ...constraints)
		: collection(firestore, path), [path, ...constraints])

	const [documents, set] = useState()
	useSnapshot(reference, ({ docs }) =>
		set(docs.map(doc => ({ id: doc.id, reference: doc.ref, ...doc.data() }))), [reference])

	return documents
}
