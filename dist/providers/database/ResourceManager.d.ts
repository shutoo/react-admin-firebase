import { RAFirebaseOptions } from '../options';
import { IFirebaseWrapper } from './firebase/IFirebaseWrapper';
import { messageTypes, IFirestoreLogger } from '../../misc';
import { FireStoreCollectionRef } from 'misc/firebase-models';
declare type IResourceItem = {} & {
    id: string;
    deleted?: boolean;
};
export interface IResource {
    path: string;
    pathAbsolute: string;
    collection: FireStoreCollectionRef;
    list: Array<IResourceItem>;
}
export declare class ResourceManager {
    private fireWrapper;
    private options;
    private flogger;
    private resources;
    constructor(fireWrapper: IFirebaseWrapper, options: RAFirebaseOptions, flogger: IFirestoreLogger);
    TryGetResource(resourceName: string, refresh?: 'REFRESH', collectionQuery?: messageTypes.CollectionQueryType): Promise<IResource>;
    GetResource(relativePath: string): IResource;
    TryGetResourcePromise(relativePath: string, collectionQuery?: messageTypes.CollectionQueryType): Promise<IResource>;
    RefreshResource(relativePath: string, collectionQuery: messageTypes.CollectionQueryType | undefined): Promise<void>;
    GetSingleDoc(relativePath: string, docId: string): Promise<import("ra-core/esm/types").Record>;
    private initPath;
    getUserIdentifier(): Promise<string>;
    private getCurrentUserEmail;
    private getCurrentUserId;
    private applyQuery;
}
export {};
