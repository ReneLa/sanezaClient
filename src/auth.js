import { AsyncStorage } from 'react-native';

export const onSignIn = () => AsyncStorage.setItem('auth_key', 'true');
//in LoginScreen we called this to set that a user has successfully logged in
//why is true a string? -- Because Asyncstorage stores only strings

export const onSignOut = () => AsyncStorage.removeItem('auth_key');

//now lets create a method that checks if the user is logged in anytime
export const isSignedIn = () => {
    return new Promise((resolve, reject) => {
       AsyncStorage.getItem('auth_key')
       

        .then(res => {
            if (res !== null) {
                resolve(true);
            } else {
                resolve(false);
            }
        })
        .catch(err => reject(err));
    });
};
