/// <reference path="../types/realm/app.d.ts" />

import { ObjectId } from 'bson';
import * as bson from 'bson';
export { bson as BSON };

/**
 * A function that can be called when the storage changes.
 */
declare type StorageChangeListener = () => void;
/**
 * Implementors of this provide a simple key-value store.
 */
interface Storage {
    /**
     * Get the value of a particular key in the storage.
     */
    get(key: string): string | null;
    /**
     * Set the value of a particular key in the storage.
     */
    set(key: string, value: string): void;
    /**
     * Remove the entry for a particular key from the storage.
     */
    remove(key: string): void;
    /**
     * Create a new store prefixed with a part of the key.
     */
    prefix(keyPart: string): Storage;
    /**
     * Clears all values stored in the storage.
     *
     * @param prefix Clear only values starting with this prefix.
     */
    clear(prefix?: string): void;
    /**
     * Add a callback function which will be called when the store updates.
     *
     * @param listener The listener callback to add.
     */
    addListener(listener: StorageChangeListener): void;
    /**
     * Remove a callback function which was previously added.
     *
     * @param listener The listener callback to remove.
     */
    removeListener(listener: StorageChangeListener): void;
}

/**
 * A `Storage` which will prefix a key part to every operation.
 */
declare class PrefixedStorage implements Storage {
    /**
     * The string separating two parts.
     */
    private static PART_SEPARATOR;
    /**
     * The underlying storage to use for operations.
     */
    private storage;
    /**
     * The part of the key to prefix when performing operations.
     */
    private keyPart;
    /**
     * Construct a `Storage` which will prefix a key part to every operation.
     *
     * @param storage The underlying storage to use for operations.
     * @param keyPart The part of the key to prefix when performing operations.
     */
    constructor(storage: Storage, keyPart: string);
    /** @inheritdoc */
    get(key: string): string | null;
    /** @inheritdoc */
    set(key: string, value: string): void;
    /** @inheritdoc */
    remove(key: string): void;
    /** @inheritdoc */
    prefix(keyPart: string): Storage;
    /** @inheritdoc */
    clear(prefix?: string): void;
    /** @inheritdoc */
    addListener(listener: StorageChangeListener): void;
    /** @inheritdoc */
    removeListener(listener: StorageChangeListener): void;
}

declare type Method = "GET" | "POST" | "DELETE" | "PUT";
declare type Headers = {
    [name: string]: string;
};
interface Request<RequestBody = unknown> extends FetchRequestInit<RequestBody> {
    method: Method;
    url: string;
    timeoutMs?: number;
}
interface CallbackResponse {
    statusCode: number;
    headers: Headers;
    body: string;
}
declare type SuccessCallback = (response: CallbackResponse) => void;
declare type ErrorCallback = (err: Error) => void;
interface ResponseHandler {
    onSuccess: SuccessCallback;
    onError: ErrorCallback;
}
interface NetworkTransport {
    fetch<RequestBody>(request: Request<RequestBody>): Promise<FetchResponse>;
    fetchWithCallbacks<RequestBody>(request: Request<RequestBody>, handler: ResponseHandler): void;
}
declare type AbortSignal = unknown;
declare type FetchHeadersInit = FetchHeaders | string[][] | Record<string, string>;
declare type FetchRequestCredentials = "include" | "omit" | "same-origin";
declare type FetchRequestMode = "cors" | "navigate" | "no-cors" | "same-origin";
declare type FetchReadableStream = unknown;
interface FetchBody {
    readonly body: FetchReadableStream | null;
    readonly bodyUsed: boolean;
    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<unknown>;
    json<ResponseBody = unknown>(): Promise<ResponseBody>;
    text(): Promise<string>;
}
interface FetchHeaders {
    append(name: string, value: string): void;
    delete(name: string): void;
    get(name: string): string | null;
    has(name: string): boolean;
    set(name: string, value: string): void;
    forEach(callback: (value: string, name: string) => void): void;
}
interface FetchResponse extends FetchBody {
    readonly headers: FetchHeaders;
    readonly ok: boolean;
    readonly redirected: boolean;
    readonly status: number;
    readonly statusText: string;
    readonly type: unknown;
    readonly url: string;
    clone(): FetchResponse;
}
interface FetchRequestInit<RequestBody = unknown> {
    /**
     * A BodyInit object or null to set request's body.
     */
    body?: RequestBody;
    /**
     * A string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL. Sets request's credentials.
     */
    credentials?: FetchRequestCredentials;
    /**
     * A Headers object, an object literal, or an array of two-item arrays to set request's headers.
     */
    headers?: FetchHeadersInit;
    /**
     * A cryptographic hash of the resource to be fetched by request. Sets request's integrity.
     */
    integrity?: string;
    /**
     * A boolean to set request's keepalive.
     */
    keepalive?: boolean;
    /**
     * A string to set request's method.
     */
    method?: string;
    /**
     * A string to indicate whether the request will use CORS, or will be restricted to same-origin URLs. Sets request's mode.
     */
    mode?: FetchRequestMode;
    /**
     * An AbortSignal to set request's signal.
     */
    signal?: AbortSignal | null;
}

declare type AnonymousPayload = Realm.Credentials.AnonymousPayload;
declare type ApiKeyPayload = Realm.Credentials.ApiKeyPayload;
declare type EmailPasswordPayload = Realm.Credentials.EmailPasswordPayload;
declare type OAuth2RedirectPayload = Realm.Credentials.OAuth2RedirectPayload;
declare type GoogleAuthCodePayload = Realm.Credentials.GoogleAuthCodePayload;
declare type GooglePayload = Realm.Credentials.GooglePayload;
declare type FacebookPayload = Realm.Credentials.FacebookPayload;
declare type FunctionPayload = Realm.Credentials.FunctionPayload;
declare type JWTPayload = Realm.Credentials.JWTPayload;
declare type ApplePayload = Realm.Credentials.ApplePayload;
declare type GoogleOptions = OAuth2RedirectPayload | GoogleAuthCodePayload | {
    idToken: string;
};
/**
 * Types of an authentication provider.
 */
declare type ProviderType = "anon-user" | "api-key" | "local-userpass" | "custom-function" | "custom-token" | "oauth2-google" | "oauth2-facebook" | "oauth2-apple";
declare type SimpleObject = Record<string, unknown>;
/**
 * Instances of this class can be passed to the `app.logIn` method to authenticate an end-user.
 */
declare class Credentials<PayloadType extends SimpleObject = SimpleObject> implements Realm.Credentials<PayloadType> {
    /**
     * Creates credentials that logs in using the [Anonymous Provider](https://docs.mongodb.com/realm/authentication/anonymous/).
     *
     * @returns The credentials instance, which can be passed to `app.logIn`.
     */
    static anonymous(): Credentials<AnonymousPayload>;
    /**
     * Creates credentials that logs in using the [API Key Provider](https://docs.mongodb.com/realm/authentication/api-key/).
     *
     * @deprecated Use `Credentials.apiKey`.
     * @param key The secret content of the API key.
     * @returns The credentials instance, which can be passed to `app.logIn`.
     */
    static userApiKey(key: string): Credentials<ApiKeyPayload>;
    /**
     * Creates credentials that logs in using the [API Key Provider](https://docs.mongodb.com/realm/authentication/api-key/).
     *
     * @deprecated Use `Credentials.apiKey`.
     * @param key The secret content of the API key.
     * @returns The credentials instance, which can be passed to `app.logIn`.
     */
    static serverApiKey(key: string): Credentials<ApiKeyPayload>;
    /**
     * Creates credentials that logs in using the [API Key Provider](https://docs.mongodb.com/realm/authentication/api-key/).
     *
     * @param key The secret content of the API key.
     * @returns The credentials instance, which can be passed to `app.logIn`.
     */
    static apiKey(key: string): Credentials<ApiKeyPayload>;
    /**
     * Creates credentials that logs in using the [Email/Password Provider](https://docs.mongodb.com/realm/authentication/email-password/).
     * Note: This was formerly known as the "Username/Password" provider.
     *
     * @param email The end-users email address.
     * @param password The end-users password.
     * @returns The credentials instance, which can be passed to `app.logIn`.
     */
    static emailPassword(email: string, password: string): Credentials<EmailPasswordPayload>;
    /**
     * Creates credentials that logs in using the [Custom Function Provider](https://docs.mongodb.com/realm/authentication/custom-function/).
     *
     * @param payload The custom payload as expected by the server.
     * @returns The credentials instance, which can be passed to `app.logIn`.
     */
    static function<PayloadType extends FunctionPayload = FunctionPayload>(payload: PayloadType): Credentials<PayloadType>;
    /**
     * Creates credentials that logs in using the [Custom JWT Provider](https://docs.mongodb.com/realm/authentication/custom-jwt/).
     *
     * @param token The JSON Web Token (JWT).
     * @returns The credentials instance, which can be passed to `app.logIn`.
     */
    static jwt(token: string): Credentials<JWTPayload>;
    /**
     * Creates credentials that logs in using the [Google Provider](https://docs.mongodb.com/realm/authentication/google/).
     *
     * @param payload The URL that users should be redirected to, the auth code or id token from Google.
     * @returns The credentials instance, which can be passed to `app.logIn`.
     */
    static google<P extends OAuth2RedirectPayload | GooglePayload>(payload: string | GoogleOptions): Credentials<P>;
    /**
     * @param payload The payload string.
     * @returns A payload object based on the string.
     */
    private static derivePayload;
    /**
     * Creates credentials that logs in using the [Facebook Provider](https://docs.mongodb.com/realm/authentication/facebook/).
     *
     * @param redirectUrlOrAccessToken The URL that users should be redirected to or the auth code returned from Facebook.
     * @returns The credentials instance, which can be passed to `app.logIn`.
     */
    static facebook<PayloadType extends OAuth2RedirectPayload | FacebookPayload>(redirectUrlOrAccessToken: string): Credentials<PayloadType>;
    /**
     * Creates credentials that logs in using the [Apple ID Provider](https://docs.mongodb.com/realm/authentication/apple/).
     *
     * @param redirectUrlOrIdToken The URL that users should be redirected to or the id_token returned from Apple.
     * @returns The credentials instance, which can be passed to `app.logIn`.
     */
    static apple<PayloadType extends OAuth2RedirectPayload | ApplePayload>(redirectUrlOrIdToken: string): Credentials<PayloadType>;
    /**
     * The name of the authentication provider used when authenticating.
     * Note: This is the same as the type for all current authentication providers in the service and mainly required for forwards-compatibility.
     */
    readonly providerName: string;
    /**
     * The type of the authentication provider used when authenticating.
     */
    readonly providerType: ProviderType;
    /**
     * The data being sent to the service when authenticating.
     */
    readonly payload: PayloadType;
    constructor(name: string, type: "anon-user", payload: AnonymousPayload);
    constructor(name: string, type: "api-key", payload: ApiKeyPayload);
    constructor(name: string, type: "local-userpass", payload: EmailPasswordPayload);
    constructor(name: string, type: "custom-function", payload: FunctionPayload);
    constructor(name: string, type: "custom-token", payload: JWTPayload);
    constructor(name: string, type: "oauth2-google", payload: OAuth2RedirectPayload | GooglePayload);
    constructor(name: string, type: "oauth2-facebook", payload: OAuth2RedirectPayload | FacebookPayload);
    constructor(name: string, type: "oauth2-apple", payload: OAuth2RedirectPayload | ApplePayload);
}

/**
 * Used to control which user is currently active - this would most likely be the {App} instance.
 */
declare type UserContext = {
    /**
     * The currently active user.
     */
    currentUser: User | null;
};
/**
 * Used when getting the location url of the app.
 */
declare type LocationUrlContext = {
    /** The location URL of the app, used instead of the base url. */
    locationUrl: Promise<string>;
};
declare type TokenType = "access" | "refresh" | "none";
interface RequestWithUrl<RequestBody> extends Request<RequestBody> {
    path?: never;
}
interface RequestWithPath<RequestBody> extends Omit<Request<RequestBody>, "url"> {
    /** Construct a URL from the location URL prepended is path */
    path: string;
    url?: never;
}
/**
 * A request which will send the access or refresh token of the current user.
 */
declare type AuthenticatedRequest<RequestBody = unknown> = {
    /**
     * Which token should be used when requesting?
     *
     * @default "access"
     */
    tokenType?: TokenType;
    /**
     * The user issuing the request.
     */
    user?: User;
} & (RequestWithUrl<RequestBody> | RequestWithPath<RequestBody>);
/**
 *
 */
declare type FetcherConfig = {
    /**
     * The id of the app.
     */
    appId: string;
    /**
     * The underlying network transport.
     */
    transport: NetworkTransport;
    /**
     * An object which can be used to determine the currently active user.
     */
    userContext: UserContext;
    /**
     * An optional promise which resolves to the response of the app location request.
     */
    locationUrlContext: LocationUrlContext;
};
/**
 * Wraps a NetworkTransport from the "realm-network-transport" package.
 * Extracts error messages and throws `MongoDBRealmError` objects upon failures.
 * Injects access or refresh tokens for a current or specific user.
 * Refreshes access tokens if requests fails due to a 401 error.
 * Optionally parses response as JSON before returning it.
 * Fetches and exposes an app's location url.
 */
declare class Fetcher implements LocationUrlContext {
    /**
     * @param user An optional user to generate the header for.
     * @param tokenType The type of token (access or refresh).
     * @returns An object containing the user's token as "Authorization" header or undefined if no user is given.
     */
    private static buildAuthorizationHeader;
    /**
     * @param body The body string or object passed from a request.
     * @returns An object optionally specifying the "Content-Type" header.
     */
    private static buildBody;
    /**
     * @param body The body string or object passed from a request.
     * @returns An object optionally specifying the "Content-Type" header.
     */
    private static buildJsonHeader;
    /**
     * The id of the app, which this Fetcher was created for.
     */
    private readonly appId;
    private readonly transport;
    private readonly userContext;
    private readonly locationUrlContext;
    /**
     * @param config A configuration of the fetcher.
     * @param config.appId The application id.
     * @param config.transport The transport used when fetching.
     * @param config.userContext An object used to determine the requesting user.
     * @param config.locationUrlContext An object used to determine the location / base URL.
     */
    constructor({ appId, transport, userContext, locationUrlContext }: FetcherConfig);
    clone(config: Partial<FetcherConfig>): Fetcher;
    /**
     * Fetch a network resource as an authenticated user.
     *
     * @param request The request which should be sent to the server.
     * @returns The response from the server.
     */
    fetch<RequestBody = unknown>(request: AuthenticatedRequest<RequestBody>): Promise<FetchResponse>;
    /**
     * Fetch a network resource as an authenticated user and parse the result as extended JSON.
     *
     * @param request The request which should be sent to the server.
     * @returns The response from the server, parsed as extended JSON.
     */
    fetchJSON<RequestBody = unknown, ResponseBody = unknown>(request: AuthenticatedRequest<RequestBody>): Promise<ResponseBody>;
    /**
     * Fetch an "event-stream" resource as an authenticated user.
     *
     * @param request The request which should be sent to the server.
     * @returns An async iterator over the response body.
     */
    fetchStream<RequestBody = unknown>(request: AuthenticatedRequest<RequestBody>): Promise<AsyncIterable<Uint8Array>>;
    /**
     * @returns The path of the app route.
     */
    get appRoute(): {
        path: string;
        location(): {
            path: string;
        };
        authProvider(providerName: string): {
            path: string;
            login(): {
                path: string;
            };
        };
        emailPasswordAuth(providerName: string): {
            register(): {
                path: string;
            };
            confirm(): {
                path: string;
            };
            confirmSend(): {
                path: string;
            };
            /**
             * Used when getting the location url of the app.
             */
            confirmCall(): {
                path: string;
            };
            reset(): {
                path: string;
            };
            resetSend(): {
                path: string;
            };
            resetCall(): {
                path: string;
            };
            path: string;
            login(): {
                path: string;
            };
        };
        functionsCall(): {
            path: string;
        };
    };
    /**
     * @returns A promise of the location URL of the app.
     */
    get locationUrl(): Promise<string>;
}

/** @inheritdoc */
declare class EmailPasswordAuth implements Realm.Auth.EmailPasswordAuth {
    private readonly fetcher;
    private readonly providerName;
    /**
     * Construct an interface to the email / password authentication provider.
     *
     * @param fetcher The underlying fetcher used to request the services.
     * @param providerName Optional custom name of the authentication provider.
     */
    constructor(fetcher: Fetcher, providerName?: string);
    /** @inheritdoc */
    registerUser(email: string, password: string): Promise<void>;
    registerUser(userDetails: Realm.Auth.RegisterUserDetails): Promise<void>;
    /** @inheritdoc */
    confirmUser(token: string, tokenId: string): Promise<void>;
    confirmUser(tokenDetails: Realm.Auth.ConfirmUserDetails): Promise<void>;
    /** @inheritdoc */
    resendConfirmationEmail(email: string): Promise<void>;
    resendConfirmationEmail(emailDetails: Realm.Auth.ResendConfirmationDetails): Promise<void>;
    /** @inheritdoc */
    retryCustomConfirmation(email: string): Promise<void>;
    retryCustomConfirmation(emailDetails: Realm.Auth.RetryCustomConfirmationDetails): Promise<void>;
    /** @inheritdoc */
    resetPassword(token: string, tokenId: string, password: string): Promise<void>;
    resetPassword(resetDetails: Realm.Auth.ResetPasswordDetails): Promise<void>;
    /** @inheritdoc */
    sendResetPasswordEmail(email: string): Promise<void>;
    sendResetPasswordEmail(emailDetails: Realm.Auth.SendResetPasswordDetails): Promise<void>;
    /** @inheritdoc */
    callResetPasswordFunction(email: string, password: string, ...args: unknown[]): Promise<void>;
    callResetPasswordFunction(resetDetails: Realm.Auth.CallResetPasswordFunctionDetails, ...args: unknown[]): Promise<void>;
}

/** @inheritdoc */
declare class ApiKeyAuth implements Realm.Auth.ApiKeyAuth {
    /**
     * The fetcher used to send requests to services.
     */
    private readonly fetcher;
    /**
     * Construct an interface to the API-key authentication provider.
     *
     * @param fetcher The fetcher used to send requests to services.
     */
    constructor(fetcher: Fetcher);
    /** @inheritdoc */
    create(name: string): Promise<Realm.Auth.ApiKey>;
    /** @inheritdoc */
    fetch(keyId: string): Promise<Realm.Auth.ApiKey>;
    /** @inheritdoc */
    fetchAll(): Promise<Realm.Auth.ApiKey[]>;
    /** @inheritdoc */
    delete(keyId: string): Promise<void>;
    /** @inheritdoc */
    enable(keyId: string): Promise<void>;
    /** @inheritdoc */
    disable(keyId: string): Promise<void>;
}

declare type SimpleObject$1 = Record<string, unknown>;
interface HydratableUserParameters {
    app: App;
    id: string;
}
interface UserParameters {
    app: App;
    id: string;
    providerType: ProviderType;
    accessToken: string;
    refreshToken: string;
}
/** The state of a user within the app */
declare enum UserState {
    /** Active, with both access and refresh tokens */
    Active = "active",
    /** Logged out, but there might still be data persisted about the user, in the browser. */
    LoggedOut = "logged-out",
    /** Logged out and all data about the user has been removed. */
    Removed = "removed"
}
/** The type of a user. */
declare enum UserType {
    /** Created by the user itself. */
    Normal = "normal",
    /** Created by an administrator of the app. */
    Server = "server"
}
/**
 * Representation of an authenticated user of an app.
 */
declare class User<FunctionsFactoryType = Realm.DefaultFunctionsFactory, CustomDataType = SimpleObject$1, UserProfileDataType = Realm.DefaultUserProfileData> implements Realm.User<FunctionsFactoryType, CustomDataType, UserProfileDataType> {
    /**
     * The app that this user is associated with.
     */
    readonly app: App<FunctionsFactoryType, CustomDataType>;
    /** @inheritdoc */
    readonly id: string;
    /** @inheritdoc */
    readonly functions: FunctionsFactoryType & Realm.BaseFunctionsFactory;
    /** @inheritdoc */
    readonly providerType: ProviderType;
    /** @inheritdoc */
    readonly apiKeys: ApiKeyAuth;
    private _accessToken;
    private _refreshToken;
    private _profile;
    private fetcher;
    private storage;
    /**
     * @param parameters Parameters of the user.
     */
    constructor(parameters: HydratableUserParameters);
    /**
     * @param parameters Parameters of the user.
     */
    constructor(parameters: UserParameters);
    /**
     * @returns The access token used to authenticate the user towards MongoDB Realm.
     */
    get accessToken(): string | null;
    /**
     * @param token The new access token.
     */
    set accessToken(token: string | null);
    /**
     * @returns The refresh token used to issue new access tokens.
     */
    get refreshToken(): string | null;
    /**
     * @param token The new refresh token.
     */
    set refreshToken(token: string | null);
    /**
     * @returns The current state of the user.
     */
    get state(): UserState;
    /**
     * @returns The logged in state of the user.
     */
    get isLoggedIn(): boolean;
    get customData(): CustomDataType;
    /**
     * @returns Profile containing detailed information about the user.
     */
    get profile(): UserProfileDataType;
    get identities(): Realm.UserIdentity[];
    get deviceId(): string | null;
    /**
     * Refresh the users profile data.
     */
    refreshProfile(): Promise<void>;
    /**
     * Log out the user, invalidating the session (and its refresh token).
     */
    logOut(): Promise<void>;
    /** @inheritdoc */
    linkCredentials(credentials: Credentials): Promise<void>;
    /**
     * Request a new access token, using the refresh token.
     */
    refreshAccessToken(): Promise<void>;
    /** @inheritdoc */
    refreshCustomData(): Promise<CustomDataType>;
    /** @inheritdoc */
    callFunction<ReturnType = unknown>(name: string, ...args: unknown[]): Promise<ReturnType>;
    /**
     * @returns A plain ol' JavaScript object representation of the user.
     */
    toJSON(): Record<string, unknown>;
    /** @inheritdoc */
    push(): Realm.Services.Push;
    /** @inheritdoc */
    mongoClient(serviceName: string): Realm.Services.MongoDB;
    private decodeAccessToken;
}

/**
 * Storage specific to the app.
 */
declare class AppStorage extends PrefixedStorage {
    /**
     * @param storage The underlying storage to wrap.
     * @param appId The id of the app.
     */
    constructor(storage: Storage, appId: string);
    /**
     * Reads out the list of user ids from storage.
     *
     * @returns A list of user ids.
     */
    getUserIds(): string[];
    /**
     * Sets the list of ids in storage.
     * Optionally merging with existing ids stored in the storage, by prepending these while voiding duplicates.
     *
     * @param userIds The list of ids to store.
     * @param mergeWithExisting Prepend existing ids to avoid data-races with other apps using this storage.
     */
    setUserIds(userIds: string[], mergeWithExisting: boolean): void;
    /**
     * Remove an id from the list of ids.
     *
     * @param userId The id of a User to be removed.
     */
    removeUserId(userId: string): void;
    /**
     * @returns id of this device (if any exists)
     */
    getDeviceId(): string | null;
    /**
     * @param deviceId The id of this device, to send on subsequent authentication requests.
     */
    setDeviceId(deviceId: string): void;
}

declare enum DeviceFields {
    DEVICE_ID = "deviceId",
    APP_ID = "appId",
    APP_VERSION = "appVersion",
    PLATFORM = "platform",
    PLATFORM_VERSION = "platformVersion",
    SDK_VERSION = "sdkVersion"
}
declare type DeviceInformationValues = {
    [DeviceFields.PLATFORM]: string;
    [DeviceFields.PLATFORM_VERSION]: string;
    [DeviceFields.SDK_VERSION]: string;
    [DeviceFields.APP_ID]?: string;
    [DeviceFields.APP_VERSION]?: string;
    [DeviceFields.DEVICE_ID]?: ObjectId;
};
declare type DeviceInformationParams = {
    appId?: string;
    appVersion?: string;
    deviceId?: ObjectId;
};
/**
 * Information describing the device, app and SDK.
 */
declare class DeviceInformation implements DeviceInformationValues {
    /**
     * The id of the device.
     */
    readonly deviceId: ObjectId | undefined;
    /**
     * The id of the Realm App.
     */
    readonly appId: string | undefined;
    /**
     * The version of the Realm App.
     */
    readonly appVersion: string | undefined;
    /**
     * The name of the platform / browser.
     */
    readonly platform: string;
    /**
     * The version of the platform / browser.
     */
    readonly platformVersion: string;
    /**
     * The version of the Realm Web SDK (constant provided by Rollup).
     */
    readonly sdkVersion: string;
    /**
     * @param params Construct the device information from these parameters.
     * @param params.appId A user-defined application id.
     * @param params.appVersion A user-defined application version.
     * @param params.deviceId An unique id for the end-users device.
     */
    constructor({ appId, appVersion, deviceId }: DeviceInformationParams);
    /**
     * @returns An base64 URI encoded representation of the device information.
     */
    encode(): string;
    /**
     * @returns The defaults
     */
    toJSON(): Record<string, unknown>;
}

/**
 * The response from an authentication request.
 */
declare type AuthResponse = {
    /**
     * The id of the user.
     */
    userId: string;
    /**
     * The short-living access token.
     */
    accessToken: string;
    /**
     * The refresh token for the session.
     */
    refreshToken: string | null;
    /**
     * The id of the device recognized by the server.
     */
    deviceId: string;
};
declare type DeviceInformationGetter = () => DeviceInformation;
/**
 * Handles authentication and linking of users.
 */
declare class Authenticator {
    private readonly fetcher;
    private readonly oauth2;
    private readonly getDeviceInformation;
    /**
     * @param fetcher The fetcher used to fetch responses from the server.
     * @param storage The storage used when completing OAuth 2.0 flows (should not be scoped to a specific app).
     * @param getDeviceInformation Called to get device information to be sent to the server.
     */
    constructor(fetcher: Fetcher, storage: Storage, getDeviceInformation: DeviceInformationGetter);
    /**
     * @param credentials Credentials to use when logging in.
     * @param linkingUser A user requesting to link.
     * @returns A promise resolving to the response from the server.
     */
    authenticate(credentials: Realm.Credentials, linkingUser?: User): Promise<AuthResponse>;
    /**
     * @param credentials Credentials to use when logging in.
     * @param link Should the request link with the current user?
     * @param extraQueryParams Any extra parameters to include in the query string
     * @returns A promise resolving to the url to be used when logging in.
     */
    private getLogInUrl;
    private openWindowAndWaitForAuthResponse;
}

declare type SimpleObject$2 = Record<string, unknown>;
/**
 * Default base url to prefix all requests if no baseUrl is specified in the configuration.
 */
declare const DEFAULT_BASE_URL = "https://realm.mongodb.com";
/**
 * Configuration to pass as an argument when constructing an app.
 */
interface AppConfiguration extends Realm.AppConfiguration {
    /**
     * Transport to use when fetching resources.
     */
    transport?: NetworkTransport;
    /**
     * Used when persisting app state, such as tokens of authenticated users.
     */
    storage?: Storage;
    /**
     * Skips requesting a location URL via the baseUrl and use the `baseUrl` as the url prefixed for any requests initiated by this app.
     * This can useful when connecting to a server through a reverse proxy, to avoid the location request to make the client "break out" and start requesting another server.
     */
    skipLocationRequest?: boolean;
}
/**
 * MongoDB Realm App
 */
declare class App<FunctionsFactoryType = Realm.DefaultFunctionsFactory & Realm.BaseFunctionsFactory, CustomDataType = SimpleObject$2> implements Realm.App<FunctionsFactoryType, CustomDataType> {
    /**
     * A map of app instances returned from calling getApp.
     */
    private static appCache;
    /**
     * Get or create a singleton Realm App from an id.
     * Calling this function multiple times with the same id will return the same instance.
     *
     * @param id The Realm App id visible from the MongoDB Realm UI or a configuration.
     * @returns The Realm App instance.
     */
    static getApp(id: string): App;
    /** @inheritdoc */
    readonly id: string;
    /**
     * Instances of this class can be passed to the `app.logIn` method to authenticate an end-user.
     */
    static readonly Credentials: typeof Credentials;
    /**
     * An object which can be used to fetch responses from the server.
     */
    readonly fetcher: Fetcher;
    /** @inheritdoc */
    readonly emailPasswordAuth: EmailPasswordAuth;
    /**
     * Storage available for the app.
     */
    readonly storage: AppStorage;
    /**
     * Internal authenticator used to complete authentication requests.
     */
    readonly authenticator: Authenticator;
    /**
     * An array of active and logged-out users.
     * Elements in the beginning of the array is considered more recent than the later elements.
     */
    private users;
    /**
     * The base URL of the app.
     */
    private readonly baseUrl;
    /**
     * Local app configuration.
     * Useful to determine what name and version an authenticated user is running.
     */
    private readonly localApp;
    /**
     * A promise resolving to the App's location url.
     */
    private _locationUrl;
    /**
     * Construct a Realm App, either from the Realm App id visible from the MongoDB Realm UI or a configuration.
     *
     * @param idOrConfiguration The Realm App id or a configuration to use for this app.
     */
    constructor(idOrConfiguration: string | AppConfiguration);
    /**
     * Switch user.
     *
     * @param nextUser The user or id of the user to switch to.
     */
    switchUser(nextUser: User<FunctionsFactoryType, CustomDataType>): void;
    /**
     * Log in a user.
     *
     * @param credentials Credentials to use when logging in.
     * @param fetchProfile Should the users profile be fetched? (default: true)
     * @returns A promise resolving to the newly logged in user.
     */
    logIn(credentials: Credentials, fetchProfile?: boolean): Promise<User<FunctionsFactoryType, CustomDataType>>;
    /**
     * @inheritdoc
     */
    removeUser(user: User<FunctionsFactoryType, CustomDataType>): Promise<void>;
    /**
     * @inheritdoc
     */
    deleteUser(user: User<FunctionsFactoryType, CustomDataType>): Promise<void>;
    /**
     * The currently active user (or null if no active users exists).
     *
     * @returns the currently active user or null.
     */
    get currentUser(): User<FunctionsFactoryType, CustomDataType> | null;
    /**
     * All active and logged-out users:
     *  - First in the list are active users (ordered by most recent call to switchUser or login)
     *  - Followed by logged out users (also ordered by most recent call to switchUser or login).
     *
     * @returns An array of users active or logged out users (current user being the first).
     */
    get allUsers(): Readonly<Record<string, User<FunctionsFactoryType, CustomDataType>>>;
    /**
     * @returns A promise of the app URL, with the app location resolved.
     */
    get locationUrl(): Promise<string>;
    /**
     * @returns Information about the current device, sent to the server when authenticating.
     */
    get deviceInformation(): DeviceInformation;
    /**
     * Create (and store) a new user or update an existing user's access and refresh tokens.
     * This helps de-duplicating users in the list of users known to the app.
     *
     * @param response A response from the Authenticator.
     * @param providerType The type of the authentication provider used.
     * @returns A new or an existing user.
     */
    private createOrUpdateUser;
    /**
     * Restores the state of the app (active and logged-out users) from the storage
     */
    private hydrate;
}

/**
 * An error produced while communicating with the MongoDB Realm server.
 */
declare class MongoDBRealmError extends Error {
    /**
     * The method used when requesting.
     */
    readonly method: Method;
    /**
     * The URL of the resource which got fetched.
     */
    readonly url: string;
    /**
     * The HTTP status code of the response.
     */
    readonly statusCode: number;
    /**
     * A human readable version of the HTTP status.
     */
    readonly statusText: string;
    /**
     * Any application-level error message.
     */
    readonly error: string | undefined;
    /**
     * Any application-level error code.
     */
    readonly errorCode: string | undefined;
    /**
     * Any application-level (URL) link containing details about the error.
     */
    readonly link: string | undefined;
    /**
     * Constructs and returns an error from a request and a response.
     * Note: The caller must throw this error themselves.
     *
     * @param request The request sent to the server.
     * @param response A raw response, as returned from the server.
     * @returns An error from a request and a response.
     */
    static fromRequestAndResponse(request: Request<unknown>, response: FetchResponse): Promise<MongoDBRealmError>;
    constructor(method: Method, url: string, statusCode: number, statusText: string, error?: string, errorCode?: string, link?: string);
}

/**
 * Simplified handle to a browser window.
 */
declare type Window = {
    /**
     * Attempt to close the window.
     */
    close: () => void;
    /**
     * Has the window been closed?
     */
    closed: boolean;
};

/**
 * Helps decode buffers into strings of various encodings.
 */
declare class TextDecoder {
    decode(buffer: Uint8Array, options?: {
        stream: boolean;
    }): string;
}
/** An object with values specific to the runtime environment. */
declare type Environment = {
    /**
     * The default storage instance on the environment.
     */
    defaultStorage: Storage;
    /**
     * Open a browser window.
     */
    openWindow: (url: string) => Window | null;
    /**
     * The name of the executing platform.
     */
    platform: string;
    /**
     * The version of the executing platform.
     */
    platformVersion: string;
    /**
     * Helps decode buffers into strings of various encodings.
     */
    TextDecoder: typeof TextDecoder;
};
/**
 * Set the environment of execution.
 * Note: This should be called as the first thing before executing any code which calls getEnvironment()
 *
 * @param e An object containing environment specific implementations.
 */
declare function setEnvironment(e: Environment): void;
/**
 * Get the environment of execution.
 *
 * @returns An object containing environment specific implementations.
 */
declare function getEnvironment(): Environment;

/**
 * Get or create a singleton Realm App from an id.
 * Calling this function multiple times with the same id will return the same instance.
 *
 * @param id The Realm App id visible from the MongoDB Realm UI or a configuration.
 * @returns The Realm App instance.
 */
declare function getApp(id: string): App;

/**
 * In-memory storage that will not be persisted.
 */
declare class LocalStorage implements Storage {
    /**
     * Internal state of the storage.
     */
    private readonly global;
    /**
     * Constructs a LocalStorage using the global window.
     */
    constructor();
    /** @inheritdoc */
    get(key: string): string | null;
    /** @inheritdoc */
    set(key: string, value: string): void;
    /** @inheritdoc */
    remove(key: string): void;
    /** @inheritdoc */
    prefix(keyPart: string): Storage;
    /** @inheritdoc */
    clear(prefix?: string): void;
    /** @inheritdoc */
    addListener(listener: StorageChangeListener): void;
    /** @inheritdoc */
    removeListener(listener: StorageChangeListener): void;
}

declare global {
    type TimerHandle = ReturnType<typeof setTimeout>;
}
/**
 * Handle an OAuth 2.0 redirect.
 *
 * @param location An optional location to use (defaults to the windows current location).
 * @param storage Optional storage used to save any results from the location.
 */
declare function handleAuthRedirect(location?: Location, storage?: Storage): void;

export { App, AppConfiguration, Credentials, DEFAULT_BASE_URL, LocalStorage, MongoDBRealmError, ProviderType, User, UserState, UserType, getApp, getEnvironment, handleAuthRedirect, setEnvironment };
