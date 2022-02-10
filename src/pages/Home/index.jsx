import { useEffect, useState } from "react";
import { BsFillXSquareFill } from 'react-icons/bs';
import Table from '../../components/Table';
import api from '../../services/api';
import styles from './Home.module.css';

export default function Home() {

  const [itens, setItens] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [modal, setModal] = useState(false);
  // const [statusItem, setStatusItem] = useState(false);
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
        fetchItemApi();
        setNewItem('');
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const removeItem = (id) => {
    let confirm = window.confirm('Deseja realmente excluir essa taréfa?');

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

  const updateItemName = () => { 
      const { _id } = currItem;

      let data = {
        name: newItem
      }

      updateItem(_id, data);
      setNewItem('');

  }

  const updateStatus = (item) => {
    let confirm = window.confirm('Deseja realmente finalizar essa taréfa?');

    if (confirm) {
      const { _id } = item;
  
      let data = {
        status: true
      }
  
      updateItem(_id, data)
    }
  }

  const updateItem = (id, data) => {
    api
      .put(`/item/${id}`, data)
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
          {modal &&
            <span className={styles.buttonClose} onClick={closeModalEdit}>
              <BsFillXSquareFill />
            </span>
          }
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
                  <button onClick={updateItemName}>
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
        </div>
      </div>
      <Table itemList={itens} removeItem={removeItem} openModalEdit={openModalEdit} updateStatus={updateStatus} />
    </div>
  )
}