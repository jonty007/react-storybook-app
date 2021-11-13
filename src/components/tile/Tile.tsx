import { TileCard } from './TileCard'

export const Tile = () => {
    return (
        <>
            <TileCard
                status={'Solved'}
                time={'1 hour ago'}
                headerIcon={'StackOverflow'}
                cardContent={
                    'Issue with using localhost:8080 and adding multiple authorized redirect_url'
                }
                tags={[
                    { value: 'tag' },
                    { value: '#tag1' },
                    { value: '#tag2' },
                    { value: '#tag3' },
                ]}
                viewCount={66}
                likeCount={20}
            />
            <TileCard
                status={'Pending'}
                time={'4 hours ago'}
                headerIcon={'Discourse'}
                cardContent={
                    'Issue with using localhost:8080 and adding multiple authorized redirect_url'
                }
                tags={[
                    { value: 'tag' },
                    { value: '#tag1' },
                    { value: '#tag2' },
                    { value: '#tag3' },
                ]}
                viewCount={66}
                likeCount={20}
            />
            <TileCard
                status={'Solved'}
                time={'1 hour ago'}
                headerIcon={'StackOverflow'}
                cardContent={
                    'Issue with using localhost:8080 and adding multiple authorized redirect_url'
                }
                tags={[
                    { value: 'tag' },
                    { value: '#tag1' },
                    { value: '#tag2' },
                    { value: '#tag3' },
                ]}
                viewCount={66}
                likeCount={20}
            />
        </>
    )
}
