function AddProduct() {
    return ( 
        
      <div className="page-wrapper">

        <div className="page-body">
          {/* Container-fluid starts*/}
          <div className="container-fluid">
            <div className="page-header">
              <div className="row">
                <div className="col-lg-6">
                  <div className="page-header-left">
                    <h3>Ajout produit
                      <small>Multikart Admin panel</small>
                    </h3>
                  </div>
                </div>
                <div className="col-lg-6">
                  <ol className="breadcrumb pull-right">
                    <li className="breadcrumb-item">
                      <a href="index.html">
                        <i data-feather="home" />
                      </a>
                    </li>
                    <li className="breadcrumb-item">Physical</li>
                    <li className="breadcrumb-item active">Ajout Produit</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {/* Container-fluid Ends*/}
          {/* Container-fluid starts*/}
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row product-adding">
                      <div className="col-xl-5">
                        <div className="add-product">
                          <div className="row">
                            <div className="col-xl-9 xl-50 col-sm-6 col-9">
                              <img src="assets/images/pro3/1.jpg" alt="" className="img-fluid image_zoom_1 blur-up lazyloaded" />
                            </div>
                            <div className="col-xl-3 xl-50 col-sm-6 col-3">
                              <ul className="file-upload-product">
                                <li>
                                  <div className="box-input-file"><input className="upload" type="file" /><i className="fa fa-plus" /></div>
                                </li>
                                <li>
                                  <div className="box-input-file"><input className="upload" type="file" /><i className="fa fa-plus" /></div>
                                </li>
                                <li>
                                  <div className="box-input-file"><input className="upload" type="file" /><i className="fa fa-plus" /></div>
                                </li>
                                <li>
                                  <div className="box-input-file"><input className="upload" type="file" /><i className="fa fa-plus" /></div>
                                </li>
                                <li>
                                  <div className="box-input-file"><input className="upload" type="file" /><i className="fa fa-plus" /></div>
                                </li>
                                <li>
                                  <div className="box-input-file"><input className="upload" type="file" /><i className="fa fa-plus" /></div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-7">
                        <form className="needs-validation add-product-form" noValidate>
                          <div className="form">
                            <div className="form-group mb-3 row">
                              <label htmlFor="validationCustom01" className="col-xl-3 col-sm-4 mb-0">Title :</label>
                              <div className="col-xl-8 col-sm-7">
                                <input className="form-control" id="validationCustom01" type="text" required />
                              </div>
                              <div className="valid-feedback">Looks good!</div>
                            </div>
                            <div className="form-group mb-3 row">
                              <label htmlFor="validationCustom02" className="col-xl-3 col-sm-4 mb-0">Prix :</label>
                              <div className="col-xl-8 col-sm-7">
                                <input className="form-control" id="validationCustom02" type="text" required />
                              </div>
                              <div className="valid-feedback">Looks good!</div>
                            </div>
                            <div className="form-group mb-3 row">
                              <label htmlFor="validationCustomUsername" className="col-xl-3 col-sm-4 mb-0">Code Produit :</label>
                              <div className="col-xl-8 col-sm-7">
                                <input className="form-control" id="validationCustomUsername" type="text" required />
                              </div>
                              <div className="invalid-feedback offset-sm-4 offset-xl-3">Please
                                choose Valid Code.</div>
                            </div>
                          </div>
                          <div className="form">
                            <div className="form-group row">
                              <label htmlFor="exampleFormControlSelect1" className="col-xl-3 col-sm-4 mb-0">Select Size :</label>
                              <div className="col-xl-8 col-sm-7">
                                <select className="form-control digits" id="exampleFormControlSelect1">
                                  <option>Small</option>
                                  <option>Medium</option>
                                  <option>Large</option>
                                  <option>Extra Large</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-xl-3 col-sm-4 mb-0">Total Products :</label>
                              <fieldset className="qty-box col-xl-9 col-xl-8 col-sm-7">
                                <div className="input-group">
                                  <input className="touchspin" type="text" defaultValue={1} />
                                </div>
                              </fieldset>
                            </div>
                            <div className="form-group row">
                              <label className="col-xl-3 col-sm-4">Add Description :</label>
                              <div className="col-xl-8 col-sm-7 description-sm">
                                <textarea id="editor1" name="editor1" cols={10} rows={4} defaultValue={""} />
                              </div>
                              <div className="offset-xl-3 offset-sm-4 mt-4">
                                <button type="submit" className="btn btn-primary">Ajouter</button>
                                <button type="button" className="btn btn-light">Annuler</button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Container-fluid Ends*/}
        </div>
        
      </div>
    
    )
   
}
export default AddProduct;