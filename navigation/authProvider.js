import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import firebase from '../firebase/fire'


export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email, password) => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
              .then(() => {
                //Once the user creation has happened successfully, we can add the currentUser into firestore
                //with the appropriate details.
                firestore().collection('baby').doc(auth().currentUser.uid)
                .set({
                    name: '',
                    weight: '',
                    gender: '',
                    birthday: '',
                    createdAt: firestore.Timestamp.fromDate(new Date()),
                   avatar: null,
                })
                //ensure we catch any errors at this stage to advise us if something does go wrong
                .catch(error => {
                    console.log('Something went wrong with added user to firestore: ', error);
                })
              })
              //we need to catch the whole sign up process if it fails too.
              .catch(error => {
                  console.log('Something went wrong with sign up: ', error);
              });
             
          },
          logout: async () => {
            try {
              await auth().signOut();
            } catch (e) {
              console.log(e);
            }
          },
          UploadPhotoAsync : async (uri, filename)=> {
            return new Promise(async (res,rej) => {
              const reponse= await fetch(uri)
              const file = await reponse.blob()
              
               let upload = firebase
               .storage()
               .ref(filename)
               .put(file)
          
               upload.on(
                 "state_changed",
                 snapshot => {},
                 err => {
                     rej(err)
                 },
                 async() => {
                   const url = await upload.snapshot.ref.getDownloadURL()
                   res(url)
                 }
               )
            })
          }
        }}>
        {children}
      </AuthContext.Provider>
    );
  }; 