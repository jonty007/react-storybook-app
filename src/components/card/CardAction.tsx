import styled from 'styled-components'
import { ReactComponent as ViewsIcon } from '../../assets/views-icon.svg'
import { ReactComponent as LikesIcon } from '../../assets/likes-icon.svg'
import { ReactComponent as ViewsActiveIcon } from '../../assets/views-active-icon.svg'
import { ReactComponent as LikesActiveIcon } from '../../assets/likes-active-icon.svg'

const StyledCardActionValue = styled.div`
    margin-left: 4.6px;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.02em;
    color: #444444;
    position: relative;
    bottom: 2px;
`

const StyledCardAction = styled.div`
    display: flex;
    cursor: pointer;
`

type CardActionValues = 'View' | 'Like'

const getIcon = (action: CardActionValues, isSelected: boolean) => {
    if (action === 'View') {
        if (isSelected === true) {
            return <ViewsActiveIcon />
        }

        return <ViewsIcon />
    }

    if (isSelected === true) {
        return <LikesActiveIcon />
    }

    return <LikesIcon />
}

interface CardActionProps {
    action: CardActionValues;
    counter: number;
    isSelected: boolean;
    onClick: () => void;
}

export const CardAction = (props: CardActionProps) => {
    return (
        <StyledCardAction onClick={props.onClick}>
            {getIcon(props.action, props.isSelected)}
            <StyledCardActionValue>{props.counter}</StyledCardActionValue>
        </StyledCardAction>
    )
}
