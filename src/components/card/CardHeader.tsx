import { useState } from 'react'
import styled from 'styled-components'

import { ReactComponent as StackoverflowIcon } from '../../assets/stackoverflow.svg'
import { ReactComponent as DiscourseIcon } from '../../assets/discourse.svg'

import { CardAction } from './CardAction'

const StyledCardHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const StyledCardHeaderActionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-basis: 28%;
`

export type CardHeaderIconValues = 'StackOverflow' | 'Discourse'

interface CardHeaderProps {
    icon: CardHeaderIconValues;
    likeCount: number;
    viewCount: number;
}

const getIcon = (icon: CardHeaderIconValues) => {
    if (icon === 'StackOverflow') {
        return <StackoverflowIcon />
    } else if(icon === 'Discourse') {
        return <DiscourseIcon />
    }

    //Default
    return <DiscourseIcon />
}

export const CardHeader = (props: CardHeaderProps) => {
    const [viewCount, setViewCount] = useState(props.viewCount)
    const [isViewSelected, setViewSelected] = useState(false)

    const [likeCount, setLikeCount] = useState(props.likeCount)
    const [isLikeSelected, setLikeSelected] = useState(false)

    const handleViewClick = () => {
        if (isViewSelected === true) {
            setViewCount(viewCount - 1)
            setViewSelected(false)
        } else {
            setViewCount(viewCount + 1)
            setViewSelected(true)
        }
    }

    const handleLikeClick = () => {
        if (isLikeSelected === true) {
            setLikeCount(likeCount - 1)
            setLikeSelected(false)
        } else {
            setLikeCount(likeCount + 1)
            setLikeSelected(true)
        }
    }

    return (
        <StyledCardHeaderContainer>
            {getIcon(props.icon)}
            <StyledCardHeaderActionContainer>
                <CardAction
                    action='View'
                    counter={viewCount}
                    isSelected={isViewSelected}
                    onClick={() => handleViewClick()}
                />
                <CardAction
                    action='Like'
                    counter={likeCount}
                    isSelected={isLikeSelected}
                    onClick={() => handleLikeClick()}
                />
            </StyledCardHeaderActionContainer>
        </StyledCardHeaderContainer>
    )
}
