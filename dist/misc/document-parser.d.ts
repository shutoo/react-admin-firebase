import { FireStoreQueryDocumentSnapshot, FireStoreDocumentSnapshot } from "./firebase-models";
import * as ra from './react-admin-models';
export declare function parseFireStoreDocument<T extends ra.Record>(doc: FireStoreQueryDocumentSnapshot | FireStoreDocumentSnapshot | undefined): T;
