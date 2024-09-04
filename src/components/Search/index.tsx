import { ReactComponent as SearchIcon } from './search.svg';
import styles from "./Search.module.scss";
interface ISearch {
  placeholder: string;
  value: string;
  onChange: () => void;
}

const Search = (props: ISearch) => {
  return (
    <div className={styles.Search}>
      <SearchIcon className={styles.Icon} />
    <input className={styles.Input} type="text" placeholder={props.placeholder} value={props.value} />
    </div>
  );
};

export default Search;
