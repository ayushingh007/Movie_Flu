
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";



const firebaseConfig = {
  apiKey: "AIzaSyCOx1oSWlQE6WXHW8nAvlDVta3XlHEknn0",
  authDomain: "movieflu-a5a1f.firebaseapp.com",
  projectId: "movieflu-a5a1f",
  storageBucket: "movieflu-a5a1f.appspot.com",
  messagingSenderId: "434879626708",
  appId: "1:434879626708:web:911bd4ce944bd71e3dea41"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signup= async (name,email,password)=>{
    try {
       const res =  await createUserWithEmailAndPassword(auth,email,password);
       const user = res.user;
       await addDoc(collection,(db,"users"),{
              uid:user.uid,
              name,
              authProvider:"local",
              email,
         
       })
        
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(""));
    }
}

const login = async (email,password)=>{
 try {
    await signInWithEmailAndPassword(auth,email,password);
 } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(""));
 }
}

const logout = async ()=>{
    signOut(auth);

}
export {auth,db,signup,login,logout}