function Description() {
    return (
      <>
        <div className="modal-content quick-view-modal">
          <div className="modal-body">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="row">
              <div className="col-lg-6 col-xs-12">
                <div className="quick-view-img">
                  <img
                    src="../assets/images/pro3/1.jpg"
                    alt=""
                    className="img-fluid blur-up lazyload"
                  />
                </div>
              </div>
              <div className="col-lg-6 rtl-text">
                <div className="product-right">
                  <h2>Women Pink Shirt</h2>
                  <h3>$32.96</h3>
                  <ul className="color-variant">
                    <li className="bg-light0" />
                    <li className="bg-light1" />
                    <li className="bg-light2" />
                  </ul>
                  <div className="border-product">
                    <h6 className="product-title">product details</h6>
                    <p>
                      Sed ut perspiciatis, unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium
                    </p>
                  </div>
                  <div className="product-description border-product">
                    <div className="size-box">
                      <ul>
                        <li className="active">
                          <a href="javascript:void(0)">s</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">m</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">l</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">xl</a>
                        </li>
                      </ul>
                    </div>
                    <h6 className="product-title">quantity</h6>
                    <div className="qty-box">
                      <div className="input-group">
                        <span className="input-group-prepend">
                          <button
                            type="button"
                            className="btn quantity-left-minus"
                            data-type="minus"
                            data-field
                          >
                            <i className="ti-angle-left" />
                          </button>{" "}
                        </span>
                        <input
                          type="text"
                          name="quantity"
                          className="form-control input-number"
                          defaultValue={1}
                        />{" "}
                        <span className="input-group-prepend">
                          <button
                            type="button"
                            className="btn quantity-right-plus"
                            data-type="plus"
                            data-field
                          >
                            <i className="ti-angle-right" />
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="product-buttons">
                    <a href="#" className="btn btn-solid">
                      add to cart
                    </a>{" "}
                    <a href="#" className="btn btn-solid">
                      view detail
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Description;
  