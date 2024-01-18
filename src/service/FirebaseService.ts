import { collection, getDocs, getFirestore, query } from "firebase/firestore";

class FirebaseService {
  async getProducts() {
    const firestore = getFirestore();
    const productCollection = collection(
      firestore,
      "products",
      "category",
      "gpu"
    );
    const snapshots = await getDocs(productCollection);
    const fetchFirebase = snapshots.docs.map((doc) => {
      const data = doc.data();
      return data;
    });
    return fetchFirebase;
  }
}

const $firebaseService = new FirebaseService();
export default $firebaseService;
