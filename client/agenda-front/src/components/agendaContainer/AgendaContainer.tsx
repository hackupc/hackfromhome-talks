import React from 'react';
import Table from '@material-ui/core/Table';

import { IAgendaProps } from './IAgendaContainerProps';
import { IAgendaState } from './IAgendaContainerState';
import '../../style/agenda.scss';
import { IContactModel } from '../../models/IContactModel';
import { Paper } from '@material-ui/core';

export default class AgendaContainer extends React.Component<IAgendaProps, IAgendaState> {

    constructor(props:IAgendaProps) {
        super(props);

        this.state ={
            friends: new Array<IContactModel>()
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
                    </div>
                    <div className="agendaTableBody">

                    </div>
                </div>
            </Paper>
        );
    }

    public componentDidMount() {
        
    }
}