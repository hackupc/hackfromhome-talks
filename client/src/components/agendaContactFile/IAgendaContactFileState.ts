import { IContactModel } from "../../models/IContactModel";

export interface IAgendaContactFileState {
    contact?: IContactModel;
    error: {
        name: boolean,
        surname: boolean,
        address: boolean,
        telephone: boolean,
        email: boolean
    }
}