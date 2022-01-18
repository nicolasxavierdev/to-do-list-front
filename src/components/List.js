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
        <h1>Today</h1>
      </div>
      <div className="box">
        <form action="/delete" method="post">
          <div className="item">
            <div className="round">
              <input type="checkbox" name="checkbox" value="<%= newListItem[i]._id%>" onChange="this.form.submit()" id="checkbox" />
              <label for="checkbox"></label>
            </div>
            <p></p>
          </div>
        </form>
      </div>

      {/* <!-- <form >
            <div class="item">
                <div class="round">
                <input type="checkbox" id="checkbox">
                <label for="checkbox"></label>
                </div>
                <p>Enjoy the party</p>
                <br>
            </div>
        </form>
        <form >
            <div class="item">
                <div class="round">
                <input type="checkbox" id="checkbox">
                <label for="checkbox"></label>
                </div>
                <p>IT Buddies welcomes you</p>
                <br>
            </div>
        </form>
        <form >
            <div class="item">
                <div class="round">
                <input type="checkbox" id="checkbox">
                <label for="checkbox"></label>
                </div>
                <p>PLS like</p>
                <br>
            </div>
        </form>
        <form >
            <div class="item">
                <div class="round">
                <input type="checkbox"id="checkbox">
                <label for="checkbox"></label>
                </div>
                <p>HEY GUYS</p>
                <br>
                </div>
            </form>          --> */}
      <div>
        <form className="item" action="/" method="post" onSubmit={cadastrar}>
          <input type="text" name="n" placeholder="new" /> <hr/>
          <button id="b" type="submit" value='cadastrar' onClick={meuEvento}> + <span id="s2"></span></button>
        </form>
      </div>
    </>
  );
};

export default List;