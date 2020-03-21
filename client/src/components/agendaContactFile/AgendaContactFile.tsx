import React from 'react';

import '../../style/agendaContact.css';
import { IAgendaContactFileProps } from './IAgendaContactFileProps';
import { IAgendaContactFileState } from './IAgendaContactFileState';
import { Drawer, Button, TextField } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';

export default class AgendaContactFile extends React.Component<IAgendaContactFileProps, IAgendaContactFileState> {

    constructor(props:IAgendaContactFileProps) {
        super(props);

        this.state = {
            error:{
                name: false,
                surname: false,
                address: false,
                telephone: false,
                email: false
            }
        }
    }

    public render(): React.ReactElement<IAgendaContactFileProps> {
        return(
            <div>
                <Drawer 
                    anchor="right" 
                    open={this.props.panelOpen}
                    className="agendaContactDrawer"
                    onClose={()=>this.CloseDrawer()}>
                    <div className="agendaContactDrawerContent">
                        {this.props.contact ?
                            <h2 className="agendaDrawerTitle">Edit Contact</h2> :
                            <h2 className="agendaDrawerTitle">New Contact</h2>
                        }
                        <div>
                            <TextField
                                required
                                label="Name"
                                name="name"
                                className="agendaContactFileField"
                                value={this.state.contact ? this.state.contact.name : null}
                                onChange={this.OnChange}
                                variant="outlined"
                                error={this.state.error.name}
                            />
                            <TextField
                                required
                                label="Surname"
                                name="surname"
                                className="agendaContactFileField"
                                value={this.state.contact ? this.state.contact.surname : null}
                                onChange={this.OnChange}
                                variant="outlined"
                                error={this.state.error.surname}
                            />
                            <TextField
                                required
                                label="Address"
                                name="address"
                                className="agendaContactFileField"
                                value={this.state.contact ? this.state.contact.address : null}
                                onChange={this.OnChange}
                                variant="outlined"
                                error={this.state.error.address}
                            />
                            <TextField
                                required
                                label="Telephone"
                                name="telephone"
                                className="agendaContactFileField"
                                value={this.state.contact ? this.state.contact.telephone : null}
                                onChange={this.OnChange}
                                variant="outlined"
                                error={this.state.error.telephone}
                            />
                            <TextField
                                required
                                label="Email"
                                name="email"
                                className="agendaContactFileField"
                                value={this.state.contact ? this.state.contact.email : null}
                                onChange={this.OnChange}
                                variant="outlined"
                                error={this.state.error.email}
                            />
                        </div>
                        <div className="agendaContactDrawerFooter">
                            <Button
                                color="primary"
                                variant="contained"
                                className="saveButton"
                                disabled={this.state.contact && (this.state.contact.name=="" || 
                                    this.state.contact.surname=="" || 
                                    this.state.contact.email=="" || 
                                    this.state.contact.telephone=="" || 
                                    this.state.contact.email=="")}
                                onClick={()=>this.OnAddContact()}
                                startIcon={<SaveIcon />}>
                                Save
                            </Button>
                            <Button
                                color="secondary"
                                variant="contained"
                                className="cancelButton"
                                onClick={()=>this.CloseDrawer()}
                                startIcon={<CancelIcon />}>
                                Cancel
                            </Button>
                        </div>
                    </div>
                </Drawer>
            </div>
        );
    }

    public componentWillReceiveProps(newProps:IAgendaContactFileProps){
        this.setState({
            contact: newProps.contact,
            error:{
                name: false,
                surname: false,
                address: false,
                telephone: false,
                email: false
            }
        });
    }

    private OnAddContact = ():void =>{
        this.props.saveContact(this.state.contact);
    }

    private CloseDrawer = ():void =>{
        this.props.closePanel();
    }

    private OnChange = (event:any):void =>{
        this.setState({
            ...this.state,
            contact:{
                ...this.state.contact,
                [event.target.name]: event.target.value
            },
            error:{
                ...this.state.error,
                [event.target.name]: event.target.value==""
            }
        });
    }
    
}