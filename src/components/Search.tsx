import React from 'react';

interface SearchProps {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FC<SearchProps> = ({searchQuery, setSearchQuery}) => {
    return (
        <div>
            Search
        </div>
    );
};

export default Search;
