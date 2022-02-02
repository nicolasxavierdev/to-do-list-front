import { BsPencilFill, BsTrashFill } from "react-icons/bs";
import styles from "./Item.module.css";

export default function Item() {
  return (
    <div className={styles.item}>
      <tr>
        <td>Levar pet para passear</td>
          <td><input type="checkbox" /></td>
          <td>
            <BsPencilFill />
            <BsTrashFill />
        </td>
      </tr>
    </div>
  )
}