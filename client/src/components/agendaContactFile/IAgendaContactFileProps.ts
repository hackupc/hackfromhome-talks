import { IContactModel } from "../../models/IContactModel";

export interface IAgendaContactFileProps {
    contact?: IContactModel;
    panelOpen: boolean;
    edit: boolean;
    closePanel(): void;
    saveContact(edit: boolean, contact?: IContactModel): void;
}