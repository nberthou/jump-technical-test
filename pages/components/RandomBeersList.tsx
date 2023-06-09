import styled from 'styled-components'
import { RandomBeer } from './RandomBeer';

const Container = styled.div`
    width: 75%;
`;

const BeersContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

export const RandomBeersList = () => {
    return (
        <Container>
            <h2>Our beers selection</h2>
            <BeersContainer>
                <RandomBeer queryKey={1} />
                <RandomBeer queryKey={2} />
            </BeersContainer>
        </Container>
    )
}