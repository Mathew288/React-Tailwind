import styled from 'styled-components'
import { ButtonsType, SearchProps } from '../../types/User'
import '/src/index.css'
import { ChangeEvent } from 'react';

const InputSearch = styled.input``;
const Button = styled.button``;


export function Search({ placeholder, onSearch }:SearchProps) {
    const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
    };

    return (
        <div className='flex items-center bg-white w-fit h-fit p-0 m-5 rounded-md'>
            <InputSearch
                className='p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-1000 rounded-md mr-0'
                placeholder={placeholder ?? "Search"}
                onChange={handleInputChange}
            />
            <img src="/src/assets/buscar.png" alt="lupa"
                className='object-cover h-[100%] w-auto mx-2 cursor-pointer'
                onClick={() => alert("")}
            />
        </div>
    )
}



export function ButtonForm({ children }: ButtonsType) {

    return (
        <Button
            className='bg-shamrock-600 hover:bg-shamrock-500 hover:text-shamrock-
            ease-linear shadow-md shadow-shamrock-950 duration-150
            px-2 py-1 mt-5 m-2 rounded-md text-sm text-shamrock-100'>
            {children}
        </Button>
    )
}



