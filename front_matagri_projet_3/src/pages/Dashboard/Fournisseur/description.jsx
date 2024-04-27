import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

function Description() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal} backdrop="static">
      <Modal.Header closeButton>
          <Modal.Title>Titre du Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="modal-content quick-view-modal">
          <div className="modal-body">
            <button
              type="button"
              className="btn-close"
              onClick={handleCloseModal}
              aria-hidden="true"
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
                  <h2>Tracteur</h2>
                  <h3>$32.96</h3>
                  <div className="border-product">
                    <h6 className="product-title">product details</h6>
                    <p>
                      Sed ut perspiciatis, unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium
                    </p>
                  </div>
                  <div className="product-description border-product">
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
                          </button>
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
          <button className="btn btn-secondary" onClick={handleCloseModal}>
            Fermer
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Description;