import { NextPage } from "next";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import styled from "styled-components";

import type { Beer, BeerData } from "../types";

const Link = styled.p`
    cursor: pointer;
    text-decoration: underline;
`


const BeerContainer = styled.div`
display: flex;
max-width: 50rem;
`

const BeerInfos = styled.div`
    margin-left: 3rem;
`

const BeerName = styled.h1`
    margin: 0;
`

const BeerFirstBrewed = styled.p`
    margin: 0;
    margin-bottom: 0.5rem;
    color: #999;
`

const BeerDescription = styled.p`
    margin-top: 1rem;
`

const fetchBeer = (id: string): Promise<Beer[]> => {
    return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/beers/${id}`)
        .then((res) => res.data.map(({ id, name, description, tagline, image_url, first_brewed }: BeerData) => ({ id, name, description, tagline, image: image_url, firstBrewed: first_brewed })))
}

const Beer: NextPage = () => {
    const router = useRouter();
    const { isLoading, data: beerData } = useQuery({
        queryKey: `getBeer${router.query.id}`,
        queryFn: () => fetchBeer(router.query.id as string),
    })

    const beer = beerData?.[0]

    return (
       <div>
        <Link onClick={() => router.push('/')}>Retour</Link>
        {isLoading ? (
            <p>Loading...</p>
        ) : (
            <BeerContainer>
                <Image src={beer?.image ?? ''} alt={beer?.name} width={200} height={200} />
                <BeerInfos>
                    <BeerName>{beer?.name}</BeerName>
                    <BeerFirstBrewed>{beer?.firstBrewed}</BeerFirstBrewed>
                    <i>{beer?.tagline}</i>
                    <BeerDescription>{beer?.description}</BeerDescription>
                </BeerInfos>
            </BeerContainer>
        )}
       </div>
    )
}

export default Beer;