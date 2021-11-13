import styled from 'styled-components'
import { CardHeader, CardHeaderIconValues } from './CardHeader'
import { CardFooter, Tag } from './CardFooter'

const StyledCardContainer = styled.div`
    background: #ffffff;
    padding: 12px;
	width: 100%;
`

const StyledCardContent = styled.div`
    margin-top: 12px;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 122.3%;
    letter-spacing: 0.02em;
    color: #1c1c1c;
`
interface CardProps {
    headerIcon: CardHeaderIconValues;
    tags: Tag[];
    content: string;
    likeCount: number;
    viewCount: number;
}

export const Card = (props: CardProps) => {
    return (
        <StyledCardContainer>
            <CardHeader
                icon={props.headerIcon}
                likeCount={props.likeCount}
                viewCount={props.viewCount}
            />
            <StyledCardContent>{props.content}</StyledCardContent>
            <CardFooter tags={props.tags} />
        </StyledCardContainer>
    )
}
