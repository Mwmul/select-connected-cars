
export type StateDispatch<stateType> = React.Dispatch<React.SetStateAction<stateType>>
export type StateHook<stateType> = [stateType, StateDispatch<stateType>];

export type TableOrder = 'asc' | 'desc';

export interface Company {
    "Rank": number,
    "Carmaker": string,
    "Revenue ($)": string,
    "Revenue (£)": string,
    "origin": string
}

export type Companies = Company[];

export interface Countries {
    [key: string]: Country
}
export interface Country {
    Continent: string,
    "GDP (£)": string,
    "GDP ($)": string
}