import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const AddProductModal = () => {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    return (
        <>
            <Button variant="primary" onClick={handleShowModal}>
                Add Product
            </Button>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Products</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="page-body">
                       
                    <div class="page-body">
                <!-- Container-fluid starts-->
                <div class="container-fluid">
                    <div class="page-header">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="page-header-left">
                                    <h3>Add Products
                                        <small>Multikart Admin panel</small>
                                    </h3>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <ol class="breadcrumb pull-right">
                                    <li class="breadcrumb-item">
                                        <a href="index.html">
                                            <i data-feather="home"></i>
                                        </a>
                                    </li>
                                    <li class="breadcrumb-item">Physical</li>
                                    <li class="breadcrumb-item active">Add Product</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row product-adding">
                                        <div class="col-xl-5">
                                            <div class="add-product">
                                                <div class="row">
                                                    <div class="col-xl-9 xl-50 col-sm-6 col-9">
                                                        <img src="assets/images/pro3/1.jpg" alt=""
                                                            class="img-fluid image_zoom_1 blur-up lazyloaded">
                                                    </div>
                                                    <div class="col-xl-3 xl-50 col-sm-6 col-3">
                                                        <ul class="file-upload-product">
                                                            <li>
                                                                <div class="box-input-file"><input class="upload"
                                                                        type="file"><i class="fa fa-plus"></i></div>
                                                            </li>
                                                            <li>
                                                                <div class="box-input-file"><input class="upload"
                                                                        type="file"><i class="fa fa-plus"></i></div>
                                                            </li>
                                                            <li>
                                                                <div class="box-input-file"><input class="upload"
                                                                        type="file"><i class="fa fa-plus"></i></div>
                                                            </li>
                                                            <li>
                                                                <div class="box-input-file"><input class="upload"
                                                                        type="file"><i class="fa fa-plus"></i></div>
                                                            </li>
                                                            <li>
                                                                <div class="box-input-file"><input class="upload"
                                                                        type="file"><i class="fa fa-plus"></i></div>
                                                            </li>
                                                            <li>
                                                                <div class="box-input-file"><input class="upload"
                                                                        type="file"><i class="fa fa-plus"></i></div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-7">
                                            <form class="needs-validation add-product-form" novalidate="">
                                                <div class="form">
                                                    <div class="form-group mb-3 row">
                                                        <label for="validationCustom01"
                                                            class="col-xl-3 col-sm-4 mb-0">Title :</label>
                                                        <div class="col-xl-8 col-sm-7">
                                                            <input class="form-control" id="validationCustom01"
                                                                type="text" required="">
                                                        </div>
                                                        <div class="valid-feedback">Looks good!</div>
                                                    </div>
                                                    <div class="form-group mb-3 row">
                                                        <label for="validationCustom02"
                                                            class="col-xl-3 col-sm-4 mb-0">Price :</label>
                                                        <div class="col-xl-8 col-sm-7">
                                                            <input class="form-control" id="validationCustom02"
                                                                type="text" required="">
                                                        </div>
                                                        <div class="valid-feedback">Looks good!</div>
                                                    </div>
                                                    <div class="form-group mb-3 row">
                                                        <label for="validationCustomUsername"
                                                            class="col-xl-3 col-sm-4 mb-0">Product Code :</label>
                                                        <div class="col-xl-8 col-sm-7">
                                                            <input class="form-control" id="validationCustomUsername"
                                                                type="text" required="">
                                                        </div>
                                                        <div class="invalid-feedback offset-sm-4 offset-xl-3">Please
                                                            choose Valid Code.</div>
                                                    </div>
                                                </div>
                                                <div class="form">
                                                    <div class="form-group row">
                                                        <label for="exampleFormControlSelect1"
                                                            class="col-xl-3 col-sm-4 mb-0">Select Size :</label>
                                                        <div class="col-xl-8 col-sm-7">
                                                            <select class="form-control digits"
                                                                id="exampleFormControlSelect1">
                                                                <option>Small</option>
                                                                <option>Medium</option>
                                                                <option>Large</option>
                                                                <option>Extra Large</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label class="col-xl-3 col-sm-4 mb-0">Total Products :</label>
                                                        <fieldset class="qty-box col-xl-9 col-xl-8 col-sm-7">
                                                            <div class="input-group">
                                                                <input class="touchspin" type="text" value="1">
                                                            </div>
                                                        </fieldset>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label class="col-xl-3 col-sm-4">Add Description :</label>
                                                        <div class="col-xl-8 col-sm-7 description-sm">
                                                            <textarea id="editor1" name="editor1" cols="10"
                                                                rows="4"></textarea>
                                                        </div>
                                                        <div class="offset-xl-3 offset-sm-4 mt-4">
                                                            <button type="submit" class="btn btn-primary">Add</button>
                                                            <button type="button" class="btn btn-light">Discard</button>
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
            </div>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseModal}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddProductModal;