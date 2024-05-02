import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import { FileUploader } from 'react-drag-drop-files';

const fileTypes = ['JPG', 'PNG', 'GIF'];

function AddProduit() {
    const [image, setImage] = useState([]);
    const [imagePreviews, setImagePreviews] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [nomMateriel, setNomMateriel] = useState('');
    const [categorie, setCategorie] = useState('');
    const [prix, setPrix] = useState('');
    const [stock, setStock] = useState('');
    const [description, setDescription] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [produits, setProduits] = useState([]);

    useEffect(() => {
        const fetchProduits = async () => {
            try {
                const response = await axios.get('/api/produits');
                setProduits(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des produits:', error);
            }
        };

        fetchProduits();
    }, []);

    const handleImageChange = (file) => {
        setImage([file]);
        setImagePreviews([URL.createObjectURL(file)]);
    };

    const removeImage = () => {
        setImage([]);
        setImagePreviews([]);
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Votre code de gestion de soumission
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données:', error);
            // Gérez les erreurs d'envoi des données ici
        }
    };

    // Autres fonctions de gestion des champs et des événements

    return (
        <>
            <a href="#" className="btn btn-sm btn-solid" onClick={handleOpenModal}>
                + Ajouter Produit
            </a>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header>
                    <Modal.Title>Ajouter Produit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="needs-validation add-product-form" noValidate onSubmit={handleSubmit}>
                        <div className="form">
                            <div className="col-md-6">
                                <label htmlFor="image" className="form-label">
                                    Image:
                                </label>
                                <FileUploader handleChange={handleImageChange} name="file" types={fileTypes} />
                                {imagePreviews.length > 0 && (
                                    <div style={{ marginTop: '10px' }}>
                                        <img src={imagePreviews[0]} alt="Preview" style={{ width: '100px', marginRight: '10px' }} />
                                        <button type="button" className="btn btn-danger btn-sm" onClick={removeImage}>
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    </div>
                                )}
                            </div>
                            {/* Autres champs de formulaire */}
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <div className="offset-xl-3 offset-sm-4 d-flex justify-content-between">
                        <Button className="btn btn-primary" onClick={handleSubmit}>
                            Ajouter
                        </Button>
                        <Button className="me-3" variant="secondary" onClick={handleCloseModal}>
                            Fermer
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default AddProduit;