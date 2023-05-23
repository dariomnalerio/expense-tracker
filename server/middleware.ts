import { getAuth, getIdToken } from "firebase/auth";
import { app } from "./firebaseConfig";
import admin from "firebase-admin";

export const verifyJwt = async (req: any, res: any, next: any) => {
  
  const token = req.headers.authorization;

  // idToken comes from the client app
  admin
    .auth()
    .verifyIdToken(token)
    .then((decodedToken: any) => {
      const uid = decodedToken.uid;
      
      if (uid == 'tieSEjdZVPSoR0nZZACHJc7C3ws1' && decodedToken.admin != true) {
        admin.auth().setCustomUserClaims(uid, { admin: true });
      }

      next();
      
    })
    .catch((error: Error) => {
      console.log(error);
    });
};
