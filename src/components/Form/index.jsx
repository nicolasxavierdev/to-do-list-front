import styles from "./Form.module.css";

export default function Form() {
  return (
    <div className={styles.form_group}>
      <div className={styles.ipt}>
        <label>Tarefa</label>
        <input type="text" />
      </div>
      <div className={styles.btn}>
        <button>Adicionar</button>
      </div>
    </div>
  )
}