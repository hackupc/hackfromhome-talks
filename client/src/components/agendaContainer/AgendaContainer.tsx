import React from 'react';
import Table from '@material-ui/core/Table';

import '../../style/agenda.css';
import 'toastr/build/toastr.css';
import * as toastr from 'toastr';
import { IContactModel } from '../../models/IContactModel';
import { Paper, Drawer, Button, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText } from '@material-ui/core';
import Service from '../../services/Service';
import { IAgendaProps } from './IAgendaContainerProps';
import { IAgendaState } from './IAgendaContainerState';
import AgendaItem from '../agendaItem/AgendaItem';
import AgendaContactFile from '../agendaContactFile/AgendaContactFile';
import AddIcon from '@material-ui/icons/Add';
import { Divider } from '@material-ui/core';
import IService from '../../services/IService';

const emptyUser: IContactModel = {
    name: "",
    surname: "",
    address: "",
    telephone: "",
    email: ""
}

export default class AgendaContainer extends React.Component<IAgendaProps, IAgendaState> {

    service: IService;

    constructor(props:IAgendaProps) {
        super(props);

        this.service = new Service();

        this.state ={
            contacts: new Array<IContactModel>(),
            panelOpen: false,
            edit: false,
            dialogOpen: false
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
                            onClick={()=>this.onAddContact()}
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
                                        editContact={this.onEditContact.bind(this)}
                                        deleteContact={this.onDeleteContact.bind(this)}/>
                                );
                            })}
                        </div>
                    </div>
                </Paper>
                <AgendaContactFile
                    contact={this.state.contact}
                    panelOpen={this.state.panelOpen}
                    edit={this.state.edit}
                    saveContact={this.onSaveContact.bind(this)}
                    closePanel={this.onClosePanel.bind(this)}
                />
                <Dialog
                    open={this.state.dialogOpen}
                    onClose={this.onCloseDialog}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">{"Delete Contact"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Are you sure you want to delete {this.state.contact?.name + ' ' + this.state.contact?.surname} from your list of contacts?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.deleteContact.bind(this)} color="primary" autoFocus>
                            Yes
                        </Button>
                        <Button onClick={this.onCloseDialog.bind(this)} color="primary">
                            No
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }

    public componentDidMount() {
        this.refreshContacts();
    }

    private onSaveContact(edit: boolean, contact: IContactModel): void {
        if(edit){
            this.service.updateContact(contact).then(()=>{
                toastr.success("Contact updated successfully!");
                this.refreshContacts();
            })
            .catch(error=>{
                toastr.error("Something wrong happened :(");
            });
        }
        else {
            this.service.createContact(contact).then(()=>{
                toastr.success("New contact created!");
                this.refreshContacts();
            })
            .catch(error=>{
                toastr.error("Something wrong happened :(");
            });
        }
    }

    private refreshContacts(){
        this.service.getContacts().then((contacts: Array<IContactModel>)=>{
            this.setState({contacts: contacts, panelOpen: false});
        });
    }

    private onAddContact(): void {
        this.setState({panelOpen: true, contact: emptyUser, edit: false});
    }

    private onEditContact(contact: IContactModel): void {
        this.setState({panelOpen: true, contact: contact, edit: true});
    }

    private onClosePanel(): void {
        this.setState({panelOpen: false});
    }

    private onDeleteContact(contact: IContactModel): void {
        this.setState({dialogOpen: true, contact: contact});
    }

    private onCloseDialog(): void {
        this.setState({dialogOpen: false});
    }

    private deleteContact():void {
        let service = new Service();
        if(this.state.contact && this.state.contact.contact_id){
            service.deleteContact(this.state.contact.contact_id ).then(()=>{
                toastr.success("Contact deleted successfully!");
                service.getContacts().then((contacts: Array<IContactModel>)=>{
                    this.setState({contacts: contacts, dialogOpen: false});
                });
            })
            .catch(error=>{
                toastr.error("Something wrong happened :(");
            });
        }
    }
}