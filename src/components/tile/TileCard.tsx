import React from 'react'
import { Card } from '../card/Card'
import { Tag } from '../card/CardFooter'
import { CardHeaderIconValues } from '../card/CardHeader'
import { Status, StatusContentValues } from '../status/Status'

import styled from 'styled-components'

const StyledTileCard = styled.div`
    width: 302px;
    height: 145px;
    border: 1px solid #ebebeb;
    box-sizing: border-box;
    box-shadow: 0px 2px 10px rgba(235, 235, 235, 0.65);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 12px;
    margin-bottom: 48px;
`

interface TileCardProps {
    status: StatusContentValues;
    time: string;
    headerIcon: CardHeaderIconValues;
    tags: Tag[];
    cardContent: string;
    likeCount: number;
    viewCount: number;
}

export const TileCard = (props: TileCardProps) => {
    return (
        <StyledTileCard>
            <Status content={props.status} time={props.time} />
            <Card
                headerIcon={props.headerIcon}
                tags={props.tags}
                content={props.cardContent}
                likeCount={props.likeCount}
                viewCount={props.viewCount}
            />
        </StyledTileCard>
    )
}
