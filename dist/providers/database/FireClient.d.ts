import { IFirestoreLogger } from "../../misc";
import { RAFirebaseOptions } from "../options";
import { IFirebaseWrapper } from "./firebase/IFirebaseWrapper";
import { IResource, ResourceManager } from "./ResourceManager";
export declare class FireClient {
    fireWrapper: IFirebaseWrapper;
    options: RAFirebaseOptions;
    flogger: IFirestoreLogger;
    rm: ResourceManager;
    constructor(fireWrapper: IFirebaseWrapper, options: RAFirebaseOptions, flogger: IFirestoreLogger);
    checkRemoveIdField(obj: any, docId: string): void;
    transformToDb(resourceName: string, documentData: any, docId: string): any;
    parseDataAndUpload(r: IResource, id: string, data: any): Promise<any>;
    addCreatedByFields(obj: any): Promise<void>;
    addUpdatedByFields(obj: any): Promise<void>;
    private uploadAndGetLink;
    private saveFile;
}
