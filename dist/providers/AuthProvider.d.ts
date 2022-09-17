import { RAFirebaseOptions } from './options';
import { AuthProvider as RaAuthProvider } from '../misc/react-admin-models';
import { FireUser } from '../misc/firebase-models';
export declare function AuthProvider(firebaseConfig: {}, options: RAFirebaseOptions): ReactAdminFirebaseAuthProvider;
export declare type ReactAdminFirebaseAuthProvider = RaAuthProvider & {
    getAuthUser: () => Promise<FireUser>;
    getJWTAuthTime: () => Promise<string | null>;
    getJWTExpirationTime: () => Promise<string | null>;
    getJWTSignInProvider: () => Promise<string | null>;
    getJWTClaims: () => Promise<{
        [key: string]: any;
    } | null>;
    getJWTToken: () => Promise<string | null>;
};
