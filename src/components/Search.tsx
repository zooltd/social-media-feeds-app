import React, {useEffect, useState} from 'react';
import {Post, User} from "../constants/types";
import Spinner from "./Spinner";
import MasonryLayout from "./MasonryLayout";

interface SearchProps {
    searchQuery: string
    user: User
    pins: Post[]
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const Search: React.FC<SearchProps> = ({searchQuery, user, pins, loading, setLoading}) => {
    const [filteredPins, setFilteredPins] = useState<Post[]>([]);

    useEffect(() => {
        if (!searchQuery) {
            setFilteredPins(pins);
            return;
        }
        setLoading(true);
        const filteredPins = pins.filter(p => p.body.includes(searchQuery) || p.user.username.includes(searchQuery));
        setFilteredPins(filteredPins);
        setLoading(false);
    }, [searchQuery, pins]);

    return (
        <>
            {
                loading ? (
                    <Spinner msg="Searching Posts ..."/>
                ) : (
                    <MasonryLayout pins={filteredPins} user={user}/>
                )
            }
        </>
    )
};

export default Search;
