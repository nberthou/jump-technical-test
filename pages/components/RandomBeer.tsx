import { FC } from "react"
import styled from "styled-components";
import { useQuery } from "react-query";
import axios from "axios";
import Image from "next/image";

import type { Beer, BeerData } from "../types";


type RandomBeerProps = {
    queryKey: number
}

const Container = styled.div`
    border: 1px solid #ccc;
    cursor: pointer;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 15rem;
    text-align: center;
`

const BeerName = styled.p`
    font-weight: bold;
`

const BeerTagline = styled.p`
    color: #666;
`

const fetchRandomBeer = (): Promise<Beer[]> => {
    return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/beers/random`)
    .then((res) => res.data.map(({ id, name, description, tagline, image_url, first_brewed }: BeerData) => ({ id, name, description, tagline, image: image_url, firstBrewed: first_brewed })))
}

export const RandomBeer: FC<RandomBeerProps> = ({ queryKey }) => {
    const { isLoading, data: randomBeer } = useQuery({
        queryKey: `getRandomBeer${queryKey}`,
        queryFn: () => fetchRandomBeer(),
        refetchInterval: 10000,
    })

    const beer = randomBeer?.[0]

    return isLoading ? (
        <p>Loading...</p>
    ) : (
        <Container>
            {beer?.image && <Image src={beer?.image} alt={beer?.name} width={25} height={75} />}
            <BeerName>{beer?.name}</BeerName>
            <BeerTagline>{beer?.tagline}</BeerTagline>
        </Container>
    )
}