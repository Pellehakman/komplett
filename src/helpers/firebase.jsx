import { collection, getDocs, getFirestore, query } from "firebase/firestore";

class FirebaseService {
  async getProducts() {
    const firestore = getFirestore();
    const product = query(collection(firestore, "gpu"));
    const snapshots = await getDocs(product);
    const fetchFirebase = snapshots.docs.map((doc) => {
      const data = doc.data();
      return data;
    });
    return fetchFirebase[0];
  }
}

const $firebaseService = new FirebaseService();
export default $firebaseService;
