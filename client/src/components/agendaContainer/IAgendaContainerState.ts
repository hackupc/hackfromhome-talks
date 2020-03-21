import { IContactModel } from "../../models/IContactModel";

export interface IAgendaState {
    contacts: Array<IContactModel>;
    contact?: IContactModel;
    panelOpen: boolean;
}