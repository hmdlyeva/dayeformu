import { NextRequest, NextResponse } from "next/server";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
} from "firebase/firestore/lite";

import app from "../firebase";

export async function GET() {
  const db = getFirestore(app);
  const citiesCol = collection(db, "Babysits");
  const citySnapshot = await getDocs(citiesCol);
  const parents = citySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  try {
    return NextResponse.json(parents);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Some error occured" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest, { body }: { body: any }) {
  try {
    const db = getFirestore(app);
    const parentsCol = collection(db, "Babysits");

    const newDocRef = await addDoc(parentsCol, body);

    const newDocSnapshot = await getDoc(newDocRef);

    console.log(newDocSnapshot.data());

    return NextResponse.json(
      { id: newDocSnapshot.id, ...newDocSnapshot.data() },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Some error occurred" },
      { status: 500 }
    );
  }
}

export const submitForm = async (formData: any) => {
  try {
    const db = getFirestore(app);
    const babysitsCol = collection(db, 'Babysits');
    await addDoc(babysitsCol, formData);
  } catch (error) {
    throw new Error('Error submitting form data to Firestore');
  }
};