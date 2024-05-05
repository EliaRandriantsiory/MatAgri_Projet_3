function Paye() {
  return (
    <div>
      <div class="container-md">
        <div class="container-fluid">
          <div class="row">
            <div class="col">
              <div class="card">
                <div class="card-header">Paiement par carte</div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <div class="mb-3">
                      <label class="form-label">Email</label>
                      <input className="form-control" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">
                        Nom titulaire de la carte
                      </label>
                      <input className="form-control" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Numéro de la carte</label>
                      <input className="form-control" />
                    </div>
                    <div class="row">
                      <div class="col">
                        <label class="form-label">Mois d'expiration</label>

                        <select
                          class="form-select "
                          aria-label="Large select example"
                        >
                          <option selected>Mois</option>
                          <option value="1">Janvier</option>
                          <option value="2">Février</option>
                          <option value="3">Mars</option>
                          <option value="4">Avril</option>
                          <option value="5">Mai</option>
                          <option value="6">Juin</option>
                          <option value="7">Juillet</option>
                          <option value="8">Août</option>
                          <option value="9">Septembre</option>
                          <option value="10">Octobre</option>
                          <option value="11">Novembre</option>
                          <option value="12">Décembre</option>
                        </select>
                      </div>
                      <div class="col">
                        <label class="form-label">Année d'expiration</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Année"
                        />
                      </div>
                      <div class="row">
                        <div class="col">
                          <label class="form-label">CVC/CVV</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="CVV"
                          />
                        </div>
                      </div>
                    </div>
                    <br />
                    <footer>
                      <div class="d-grid gap-2 col-6 mx-auto">
                        <button class="btn btn-xs btn-solid" type="button">
                          Valider
                        </button>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-header">Paiement par Mobile Banking</div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic radio toggle button group"
                    >
                      <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio1"
                        autoComplete="off"
                        defaultChecked
                      />
                      <label
                        className="btn btn-outline-success"
                        htmlFor="btnradio1"
                      >
                        Telma
                      </label>
                      <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio2"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-warning"
                        htmlFor="btnradio2"
                      >
                        Orange
                      </label>
                      <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio3"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-danger"
                        htmlFor="btnradio3"
                      >
                        Airtel
                      </label>
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Numéro de téléphone</label>
                      <input className="form-control" />
                    </div>
                    <footer>
                      <div class="d-grid gap-2 col-6 mx-auto">
                        <button class="btn btn-xs btn-solid" type="button">
                          Valider
                        </button>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Paye;
