import React from 'react'
import styled from 'styled-components'

import { ReactComponent as SolvedIcon } from '../../assets/solved-icon.svg'
import { ReactComponent as PendingIcon } from '../../assets/pending.svg'

export type StatusContentValues = 'Solved' | 'Pending'

const StyledStatus = styled.div`
    display: flex;
    justify-content: space-between;
    width: 302px;
    margin-bottom: 8px;
`

const StyledStatusValue = styled.div`
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    justify-content: space-between;
    flex-basis: 22%;
`

const UpdatedTime = styled.div`
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    text-align: right;
    color: #8c8c8c;
`

const SolvedStatusInfo = styled.span`
    margin-left: 12px;
    color: #38a169;
`

const PendingStatusInfo = styled.span`
    margin-left: 12px;
    color: #faa251;
`

interface StatusProps {
    content: StatusContentValues;
    time: string;
}

const getSolvedStatusComponent = (content: string, time: string) => {
    return (
        <StyledStatus>
            <StyledStatusValue>
                <SolvedIcon />
                <SolvedStatusInfo>{content}</SolvedStatusInfo>
            </StyledStatusValue>
            <UpdatedTime>{time}</UpdatedTime>
        </StyledStatus>
    )
}

const getPendingStatusComponent = (content: string, time: string) => {
    return (
        <StyledStatus>
            <StyledStatusValue>
                <PendingIcon />
                <PendingStatusInfo>{content}</PendingStatusInfo>
            </StyledStatusValue>
            <UpdatedTime>{time}</UpdatedTime>
        </StyledStatus>
    )
}

const getStatus = (content: StatusContentValues, time: string) => {
    if ('Solved' === content) {
        return getSolvedStatusComponent(content, time)
    }

    return getPendingStatusComponent(content, time)
}

export const Status = (props: StatusProps) => {
    return getStatus(props.content, props.time)
}
