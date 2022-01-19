import './css/styles.css';

function List() {

  function cadastrar(e) {
    e.preventDefault()
    console.log('Cadastrou');
  }

  function meuEvento() {
    console.log('clicou');
  }

  return (
    <>
      <div className="box1" id="heading">
        <h1>Lista</h1>
        <div>
          <form className="item" action="/" method="post" onSubmit={cadastrar}>
            <input type="text" name="n" placeholder="Adicione um novo item" />
            <button id="b" type="submit" value='cadastrar' onClick={meuEvento}><span id="s2"> + </span></button>
          </form>
        </div>
        <div className="round">
          <input type="checkbox" name="checkbox" value="<%= newListItem[i]._id%>" onChange="this.form.submit()" id="checkbox" />
          <label for="checkbox"></label>
        </div>
      </div>
      <div className="box">
        <form action="/delete" method="post">
          <div className="item">
            <p></p>
          </div>
        </form>
      </div>
    </>
  );
};

export default List;