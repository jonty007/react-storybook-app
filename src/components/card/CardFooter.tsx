import styled from 'styled-components'

const StyledCardFooter = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 12px;
`

const StyledTag = styled.div`
    margin-right: 8px;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 126.3%;
    letter-spacing: 0.02em;
    color: #545dea;
`

export interface Tag {
    value: string
}

interface CardFooterProps {
    tags: Tag[];
}

export const CardFooter = (props: CardFooterProps) => {
    if (props.tags.length === 0) {
        return null
    }

    return (
        <StyledCardFooter>
            {props.tags.map((tag, idx) => (
                <StyledTag key={idx}>{tag.value}</StyledTag>
            ))}
        </StyledCardFooter>
    )
}
