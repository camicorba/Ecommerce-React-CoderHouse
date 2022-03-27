
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBol6_OxGJLDyA496NBBl_1DJsdWQ10LVM",
  authDomain: "wasabi-ecommerce.firebaseapp.com",
  projectId: "wasabi-ecommerce",
  storageBucket: "wasabi-ecommerce.appspot.com",
  messagingSenderId: "379635163528",
  appId: "1:379635163528:web:7c6bc23b08e8cd2f26da3d"
};


const app = initializeApp(firebaseConfig);
export default function getFirestoneApp() {
    return app
}