export enum FetchingStatus {
    NOT_STARTED ='NOT_STARTED',
    SUCCESS = 'SUCCESS',
    IN_PROGRESS = 'IN_PROGRESS',
    ERROR = 'ERROR'
}

export interface MessagePostingState {
    status: FetchingStatus,
    errorMsg: string,
    postedId: string
}

export interface MessageGettingState {
    status: FetchingStatus,
    errorMsg: string
}

export interface MessageCreated {
    publicId: string
}

export interface ServerError {
    error: string
}

export interface InputPostMessageState {
    text: string,
    counter: number,
    expires: number,
    password: string
}

export interface InputGetMessageState {
    password: string,
}

export interface MessageDataState {
    img: string,
    counter: number,
    expires: number
}
