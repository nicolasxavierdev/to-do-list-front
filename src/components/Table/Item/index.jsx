import { useEffect, useState } from "react";
import { BsPencilFill, BsTrashFill } from "react-icons/bs";
import api from "../../../services/api";
import styles from "./Item.module.css";

export default function Item() {

  const [itens, setItens] = useState([]);

  useEffect(() => {
    api
      .get('/item')
      .then((res) => {
        setItens(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);
  return (
    itens.map((item) => {
      return (
        <tr key={item._id}>
          <td>{item.name}</td>
          <td><input type="checkbox" /></td>
          <td className={styles.actions}>
            <span>
              <BsPencilFill />
            </span>
            <span>
              <BsTrashFill />
            </span>
          </td>
        </tr>
      )
    })

  )
}