import { useEffect, useState } from "react";
import { BsFillXSquareFill } from 'react-icons/bs';
import Table from '../../components/Table';
import api from '../../services/api';
import styles from './Home.module.css';

export default function Home() {

  const [itens, setItens] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [modal, setModal] = useState(false);
  const [statusItem, setStatuItem] = useState(false);
  const [currItem, setCurrItem] = useState({});

  const fetchItemApi = () => {
    api
      .get('/item')
      .then((res) => {
        setItens(res.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const addNewItem = () => {
    api
      .post('/item', {
        name: newItem,
        status: false
      })
      .then((res) => {
        console.log(res);
        fetchItemApi();
        setNewItem('');
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const removeItem = (id) => {
    let confirm = window.confirm('Deseja realmente excluir esse item?');
    if (confirm) {
      api
        .delete(`/item/${id}`)
        .then((res) => {
          console.log(res);
          fetchItemApi();
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }

  const updateItem = () => {
    const { _id } = currItem;

    let data = {
      name: newItem,
      status: statusItem
    }
    api
      .put(`/item/${_id}`, data)
      .then((res) => {
        closeModalEdit();
        fetchItemApi();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const closeModalEdit = () => {
    setModal(false)
  }

  const openModalEdit = (item) => {
    if (!item.status) {
      setModal(true);
      setCurrItem(item);
      setNewItem(item.name);
    } else {
      alert('Ação  não permitida, pois essa tarefa foi finalizada');
    }
  }

  useEffect(() => {
    fetchItemApi();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Lista de tarefas</h1>
      <div className={`${styles.form_group} ${(modal) ? styles.modalOpen : ''}`}>
        <div className={styles.formBox}>
          <span className={styles.buttonClose} onClick={closeModalEdit}>
            <BsFillXSquareFill />
          </span>
          <div style={{ display: 'flex' }}>
            <div className={styles.ipt}>
              <label>Tarefas</label>
              <div>
                <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
              </div>
            </div>
            <div className={styles.btn}>
              {(modal)
                ?
                <div>
                  <button onClick={updateItem}>
                    Atualizar
                  </button>
                </div>
                :
                <button onClick={addNewItem}>
                  Adicionar
                </button>
              }
            </div>
          </div>
          {(modal) &&
            <div className={styles.iptBox}>
              <label>
                <input type="checkbox" onChange={(e) => setStatusItem(e.target.checked)} />
                Marcar como finalizada
              </label>
            </div>
          }
        </div>
      </div>
      <Table itemList={itens} removeItem={removeItem} openModalEdit={openModalEdit} />
    </div>
  )
}