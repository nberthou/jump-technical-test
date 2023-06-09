import React from "react"
import styled from "styled-components"

interface SearchBarProps {
    searchInput: string;
    setSearchInput: (value: string) => void;
}

const StyledInput = styled.input`
    width: 50%;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
    margin-bottom: 1rem;
    font-size: 1rem;
    outline: none;
`;


export const SearchBar: React.FC<SearchBarProps> = ({searchInput, setSearchInput}) => (
        <StyledInput type="text" onChange={e => setSearchInput(e.target.value.split(' ').join('_'))} value={searchInput} />
)
