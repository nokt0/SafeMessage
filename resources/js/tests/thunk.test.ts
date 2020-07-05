import createMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as fetchMock from "fetch-mock";
import {notStarted, success, inProgress} from "../store/messagePostingSlice";
import {postMessageThunk} from "../store/thunk";
import {AnyAction} from 'redux'
import {InputPostMessageState} from "../store/types";

const mockStore = createMockStore([thunk])

describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    it('Post Message', () => {
        fetchMock.postOnce(`/message`, {
            headers: {'content-type': 'application/json'},
            body: {
                "publicId": "781bd9f1de084f4daa7ba2aa8a71a2eab855354e"
            },
            status: 201
        })
        const expectedActions = [notStarted(), inProgress(), success('781bd9f1de084f4daa7ba2aa8a71a2eab855354e')]
        const store = mockStore({})

        store.dispatch(postMessageThunk({
            message: 'asd',
            expires: 221,
            password: '1421as',
            counter: 241
        }as InputPostMessageState) as unknown as AnyAction)
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
    })

    it('Get message',() =>{

    })
})
