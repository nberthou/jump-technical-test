import axios from "axios"
import { useQuery } from "react-query"
import styled from "styled-components"

import type { Beer, BeerData } from "../types"
import { BeerItem } from "./BeerItem"


const Container = styled.div`
    width: 75%;
`;

const fetchBeers = (): Promise<Beer[]> => 
  axios.get(`${process.env.NEXT_PUBLIC_API_URL}/beers?per_page=10`)
  .then((res) => res.data
  .map(({ id, name, description, tagline, image_url, first_brewed }: BeerData) => ({ id, name, description, tagline, image: image_url, firstBrewed: first_brewed }))
  )

export const BeersList = () => {
    const { isLoading, data: beers } = useQuery({
        queryKey: ['getBeers'],
        queryFn: () =>fetchBeers(),
      })

    return (
        <Container>
            <h2>Our beers</h2>
       { isLoading ? (
            <p>Loading...</p>
          ) : (
           <div>
            {beers?.map((beer: Beer) => (
               <BeerItem beer={beer} key={beer.id} />
            ))}
           </div>
          ) }
        </Container>
    )
}