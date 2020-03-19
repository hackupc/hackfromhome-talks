import React from 'react';
import { IAgendaItemProps } from './IAgendaItemProps';
import { IAgendaItemsState } from './IAgendaItemsState';

export default class AgendaItem extends React.Component<IAgendaItemProps, IAgendaItemsState> {

    constructor(props:IAgendaItemProps) {
        super(props);
    }

    public render(): React.ReactElement<IAgendaItemProps> {
        return(
            <div>HelloWorld</div>
        );
    }
}