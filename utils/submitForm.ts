import { addDoc, collection, getFirestore } from "firebase/firestore";
import app from "../app/api/firebase";


export const submitFormBabysits = async (formData: any) => {
    try {
      const db = getFirestore(app);
      const babysitsCol = collection(db, 'Babysits');
      await addDoc(babysitsCol, formData);
    } catch (error) {
      throw new Error('Error submitting form data to Firestore');
    }
  };

    export const submitForm = async (formData: any) => {
    try {
      const db = getFirestore(app);
      const babysitsCol = collection(db, 'Parents');
      await addDoc(babysitsCol, formData);
    } catch (error) {
      throw new Error('Error submitting form data to Firestore');
    }
  };