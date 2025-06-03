import { firestore } from "../firebase/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

// Exemplu: salvare exercițiu
export const addExercise = async (sport, exercise) => {
  try {
    await addDoc(collection(firestore, sport), exercise);
  } catch (error) {
    console.error("Eroare la salvarea exercițiului:", error);
  }
};

// Exemplu: citire exerciții
export const getExercises = async (sport) => {
  try {
    const querySnapshot = await getDocs(collection(firestore, sport));
    return querySnapshot.docs.map((doc) => doc.data());
  } catch (error) {
    console.error("Eroare la citirea exercițiilor:", error);
    return [];
  }
};
