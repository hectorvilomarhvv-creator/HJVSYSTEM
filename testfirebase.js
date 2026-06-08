import { db } from "./firebase.js";

import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

async function test() {

  try {

    const docRef = await addDoc(
      collection(db, "students"),
      {
        nombre: "Prueba Firebase",
        curso: "5to A",
        telefono: "8095550001"
      }
    );

    console.log("Guardado:", docRef.id);

  } catch(error) {

    console.error(error);

  }

}

test();