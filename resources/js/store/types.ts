export enum FetchingStatus {
    SUCCESS = 'SUCCESS',
    IN_PROGRESS = 'IN_PROGRESS',
    ERROR = 'ERROR'
}

export interface MessagePostingState {
    status: FetchingStatus
}

export interface MessageGettingState {
    status: FetchingStatus
}

export interface InputPostMessageState {
    message: string,
    counter: number,
    expires: number,
    password: string
}

export interface InputGetMessageState {
    password: string
}

export interface MessageDataState {
    image: string,
    counter: number,
    expires: number
}
