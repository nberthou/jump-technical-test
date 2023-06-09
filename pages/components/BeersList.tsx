import { useEffect, useState } from "react"
import axios from "axios"
import { useQuery } from "react-query"
import styled from "styled-components"

import type { Beer, BeerData } from "../types"
import { BeerItem } from "./BeerItem"
import { SearchBar } from "./SearchBar"


const Container = styled.div`
    width: 75%;
`;

const fetchBeers = (searchInput: string): Promise<Beer[]> => 
  axios.get(`${process.env.NEXT_PUBLIC_API_URL}/beers?per_page=10${searchInput ? `&beer_name=${searchInput}` : ''}`)
  .then((res) => res.data
  .map(({ id, name, first_brewed }: BeerData) => ({ id, name, firstBrewed: first_brewed }))
  )

export const BeersList = () => {

    const [searchInput, setSearchInput] = useState<string>('')

    const { isLoading, data: beers, refetch: refetchBeers } = useQuery({
        queryKey: ['getBeers'],
        queryFn: () =>fetchBeers(searchInput),
      })

      useEffect(() => {
        refetchBeers()
      }, [searchInput, refetchBeers])

    return (
        <Container>
            <h2>Our beers</h2>
       { isLoading ? (
            <p>Loading...</p>
          ) : (
           <div>
            <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
            {beers?.map((beer: Beer) => (
               <BeerItem beer={beer} key={beer.id} />
            ))}
           </div>
          ) }
        </Container>
    )
}