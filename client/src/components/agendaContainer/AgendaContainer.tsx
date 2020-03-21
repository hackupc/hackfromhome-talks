import React from 'react';
import Table from '@material-ui/core/Table';

import '../../style/agenda.css';
import { IContactModel } from '../../models/IContactModel';
import { Paper, Drawer, Button } from '@material-ui/core';
import Service from '../../services/Service';
import { IAgendaProps } from './IAgendaContainerProps';
import { IAgendaState } from './IAgendaContainerState';
import AgendaItem from '../agendaItem/AgendaItem';
import AgendaContactFile from '../agendaContactFile/AgendaContactFile';
import AddIcon from '@material-ui/icons/Add';
import { Divider } from '@material-ui/core';

const emptyUser: IContactModel = {
    name: "",
    surname: "",
    address: "",
    telephone: "",
    email: ""
}

export default class AgendaContainer extends React.Component<IAgendaProps, IAgendaState> {

    constructor(props:IAgendaProps) {
        super(props);

        this.state ={
            contacts: new Array<IContactModel>(),
            panelOpen: false
        }
    }

    public render(): React.ReactElement<IAgendaProps> {
        return(
            <div>
                <Paper className="agendaContainer">
                    <div className="agendaHeaderConteiner">
                        <h1 className="agendaTitle">Agenda</h1>
                        <Button className="agendaAddContact"
                            color="primary"
                            variant="contained"
                            onClick={()=>this.OnAddContact()}
                            startIcon={<AddIcon />}>
                            Add Contact
                        </Button>
                    </div>
                    <div className="agendaTable">
                        <div className="agendaTableHeader">
                            <div className="agendaTableNameHeader">Name</div>
                            <div className="agendaTableAddressHeader">Address</div>
                            <div className="agendaTableTelephoneHeader">Telephone</div>
                            <div className="agendaTableEmailHeader">Email</div>
                            <div className="agendaTableOptionsHeader">Options</div>
                        </div>
                        <Divider/>
                        <div className="agendaTableBody">
                            {this.state.contacts.map((contact: IContactModel, index: number)=>{
                                return(
                                    <AgendaItem 
                                        key={index}
                                        contact={contact}
                                        editContact={this.OnEditContact.bind(this)}/>
                                );
                            })}
                        </div>
                    </div>
                </Paper>
                <AgendaContactFile
                    contact={this.state.contact}
                    panelOpen={this.state.panelOpen}
                    saveContact={this.SaveContact.bind(this)}
                    closePanel={this.OnClosePanel.bind(this)}
                />
            </div>
        );
    }

    public componentDidMount() {
        let service = new Service();
        service.getContacts().then((contacts: Array<IContactModel>)=>{
            this.setState({contacts: contacts});
        });
    }

    private SaveContact(contact: IContactModel): void {
        let service = new Service();
        let that = this;
        service.saveContact(contact).then(()=>{
            service.getContacts().then((contacts: Array<IContactModel>)=>{
                that.setState({contacts: contacts, panelOpen: false});
            });
        });
    }

    private OnClosePanel(): void {
        this.setState({panelOpen: false});
    }

    private OnAddContact(): void {
        this.setState({panelOpen: true, contact: emptyUser});
    }

    private OnEditContact(contact: IContactModel): void {
        this.setState({panelOpen: true, contact: contact});
    }
}