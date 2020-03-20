import React from 'react';
import Table from '@material-ui/core/Table';

import '../../style/agenda.scss';
import { IContactModel } from '../../models/IContactModel';
import { Paper } from '@material-ui/core';
import Service from '../../services/Service';
import { IAgendaProps } from './IAgendaContainerProps';
import { IAgendaState } from './IAgendaContainerState';
import AgendaItem from '../agendaItem/AgendaItem';
import { Divider } from '@material-ui/core';

export default class AgendaContainer extends React.Component<IAgendaProps, IAgendaState> {

    constructor(props:IAgendaProps) {
        super(props);

        this.state ={
            contacts: new Array<IContactModel>()
        }
    }

    public render(): React.ReactElement<IAgendaProps> {
        return(
            <Paper className="agendaContainer">
                <h1 className="agendaTitle">Agenda</h1>
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
                        {this.state.contacts.map((contact: IContactModel)=>{
                            return(
                                <AgendaItem contact={contact}/>
                            );
                        })}
                    </div>
                </div>
            </Paper>
        );
    }

    public componentDidMount() {
        let service = new Service();
        service.getContacts().then((contacts: Array<IContactModel>)=>{
            this.setState({contacts: contacts});
        });
    }
}