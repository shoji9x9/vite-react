import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../infrastructure/firebase";

export async function signInWithGoogle() {
  try {
    const userCredential = await signInWithPopup(auth, provider);
    return userCredential;
  } catch (e) {
    console.log(e);
  }
}
