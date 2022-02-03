import Item from './Item';
import styles from "./Table.module.css";

export default function Table() {
  return(
    <div className={styles.table}>
      <table>
        <thead>
          <tr>
            <th >NOME</th>
            <th>STATUS</th>
            <th>AÇÕES</th>
          </tr>
        </thead>
        <tbody>
          <Item />
        </tbody>
      </table>
    </div> 
  )
}