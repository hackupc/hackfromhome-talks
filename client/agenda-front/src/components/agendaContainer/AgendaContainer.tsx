import React from 'react';
import { IAgendaProps } from './IAgendaContainerProps';
import { IAgendaState } from './IAgendaContainerState';

export default class AgendaContainer extends React.Component<IAgendaProps, IAgendaState> {

    constructor(props:IAgendaProps) {
        super(props);
    }

    public render(): React.ReactElement<IAgendaProps> {
        return(
            <div>HelloWorld</div>
        );
    }
}