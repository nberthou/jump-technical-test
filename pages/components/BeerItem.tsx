import { FC } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import type { Beer } from '../types'

type BeerItemProps = {
    beer: Beer
}

const ItemContainer = styled.div`
  margin: 0.5rem;
  cursor: pointer;
  `

const BeerName = styled.p`
    font-weight: bold;
    margin-bottom: 0;
`

const BeerFirstBrewed = styled.p`
    margin: 0;
    color: #999;
    font-size: 0.9rem;
`;

export const BeerItem: FC<BeerItemProps> = ({beer}) => {
    const router = useRouter()
    return (
        <ItemContainer onClick={() => router.push(`/beers/${beer?.id}`)}>
            <BeerName>{beer.name}</BeerName>
            <BeerFirstBrewed>{beer.firstBrewed}</BeerFirstBrewed>
        </ItemContainer>
    )
}