import { BsPencilFill, BsTrash } from 'react-icons/bs';
import styles from './Table.module.css';

export default function Table({ itemList, removeItem, openModalEdit, updateStatus }) {
  return (
    <div className={styles.table}>
      <table>
        <thead>
          <tr>
            <th>NOME</th>
            <th>STATUS</th>
            <th>AÇÕES</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {(itemList.length > 0)
            ?
            itemList.map((item) => {
              return (
                <tr key={item._id}>
                  <td>
                    <span style={{ textDecoration: (item.status) ? 'line-through' : 'none' }}>
                      {item.name}
                    </span>
                  </td>
                  <td>
                    <span>
                      {`${(item.status) ? 'Finalizada' : 'Pendente'}`}
                    </span>
                  </td>
                  <td className={styles.actions}>
                    <span onClick={() => openModalEdit(item)}>
                      <BsPencilFill />
                    </span>
                    <span onClick={() => removeItem(item._id)}>
                      <BsTrash />
                    </span>
                  </td>
                  <td className={styles.btn}>
                    {(!item.status) &&
                      <button onClick={(e) => updateStatus(item)}>Finalizar tarefa</button>
                    }
                  </td>
                </tr>
              );
            })
            :
            <tr>
              <td colSpan='3'>Nenhum item encontrado</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  )
}