import { IFirebaseWrapper } from "providers/database";
export interface RefDocFound {
    fieldPath: string;
    refDocPath: string;
}
export interface FromFirestoreResult {
    parsedDoc: any;
    refdocs: RefDocFound[];
}
export declare function translateDocFromFirestore(obj: any): FromFirestoreResult;
export declare function recusivelyCheckObjectValue(input: any, fieldPath: string, result: FromFirestoreResult): any;
export declare function applyRefDocs(doc: any, refDocs: RefDocFound[]): any;
export declare const recursivelyMapStorageUrls: (fireWrapper: IFirebaseWrapper, fieldValue: any) => Promise<any>;
