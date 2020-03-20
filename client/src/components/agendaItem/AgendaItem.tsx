import React from 'react';

import '../../style/agendaItem.css';
import { IAgendaItemProps } from './IAgendaItemProps';
import { IAgendaItemsState } from './IAgendaItemsState';
import { Avatar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Divider } from '@material-ui/core';

export default class AgendaItem extends React.Component<IAgendaItemProps, IAgendaItemsState> {

    constructor(props:IAgendaItemProps) {
        super(props);
    }

    public render(): React.ReactElement<IAgendaItemProps> {
        return(
            <div>
                <div className="agendaContact">
                    <div className="agendaContactNameContainer">
                        <Avatar src={this.props.contact.image_url} className="agendaContactImage">DA</Avatar>
                        <div className="agendaContactName">{this.props.contact.name + ' ' + this.props.contact.surname}</div>
                    </div>
                    <div className="agendaContactAddress">{this.props.contact.address}</div>
                    <div className="agendaContactTelephone">{this.props.contact.telephone}</div>
                    <div className="agendaContactEmail">{this.props.contact.email}</div>
                    <div className="agendaContactOptions">
                        <IconButton className="agendaContactOptionsButton" aria-label="delete contact">
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                        <IconButton className="agendaContactOptionsButton" aria-label="edit contact">
                            <EditIcon fontSize="small" />
                        </IconButton>
                    </div>
                </div>
                <Divider/>
            </div>
        );
    }
}