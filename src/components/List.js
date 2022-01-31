import { BsEraser, BsPlusSquare, BsTrash } from 'react-icons/bs';
import './styles.css';

function List() {
  return (
    <>
      <div className='box'>
        <input className='boxInput' type="text" placeholder="Adicione um novo item" />
        <BsPlusSquare />

        <div>
          <input type="checkbox" />
          <div>
            <p></p>
            <BsTrash />
            <BsEraser />
          </div>
        </div>
      </div>
    </>
  );
};

export default List;