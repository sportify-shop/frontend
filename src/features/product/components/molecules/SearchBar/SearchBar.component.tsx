import { Search, SearchIconWrapper, StyledInputBase } from "./SearchBar.style";
import SearchIcon from '@mui/icons-material/Search';

type Props = {
  setSearchBarValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ setSearchBarValue }: Props) => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Rechercher un produit..."
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => setSearchBarValue(e.target.value)}
      />
    </Search>
  )
};

export default SearchBar;