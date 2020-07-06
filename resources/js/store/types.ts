export enum FetchingStatus {
    NOT_STARTED ='NOT_STARTED',
    SUCCESS = 'SUCCESS',
    IN_PROGRESS = 'IN_PROGRESS',
    ERROR = 'ERROR'
}

export interface MessagePostingState {
    status: FetchingStatus,
    errorConst: string,
    errorMsg: string,
    postedId: string,

}

export interface MessageGettingState {
    status: FetchingStatus,
    errorMsg: string,
    errorConst: string
}

export interface MessageCreated {
    publicId: string
}

export interface ServerError {
    errorConst: string;
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

export const FILE_NOT_FOUND = 'FILE_NOT_FOUND';
export const WRONG_PASSWORD = 'WRONG_PASSWORD';
export const MESSAGE_EXPIRED = 'MESSAGE_EXPIRED';
export const COUNTER_IS_ZERO = 'COUNTER_IS_ZERO';
export const MESSAGE_DOESNT_EXIST = 'MESSAGE_DOESNT_EXIST';
export const NOT_ENOUGH_PARAMS = 'NOT_ENOUGH_PARAMS';
export const UNKNOWN_ERROR = 'UNKNOWN_ERROR';
