export interface ForAllProps {
    name: string;
    topLevelDomain: string[];
    callingCodes: string[];
    capital: string;
    subregion: string;
    region: string;
    population: number;
    timezones: string[];
    borders: string[];
    nativeName: string;
    flags: {
        svg: string;
        png: string;
    };
    currencies: {
        code: string;
        name: string;
        symbol: string;
    }[];
    languages: {
        iso639_1: string;
        iso639_2: string;
        name: string;
        nativeName: string;
    }[];
    flag: string;

}

export interface MainProps {
    countryData: ForAllProps | null;
    setCountryData: React.Dispatch<React.SetStateAction<ForAllProps | null>>;
    jsonData: ForAllProps[];
    txtVal: string;
}

