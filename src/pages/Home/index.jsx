import Form from "../../components/Form";
import Table from "../../components/Table";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Lista de tarefas</h1>
      <Form />
      <Table />
    </div>
  )
}