import axios from "axios";
import { useState } from "react";

function SupprimerMateriel({ materielItem }) {
    const [images, setImages] = useState([]);
    const [imagePreviews, setImagePreviews] = useState([]);
    console.log(materielItem.materielId)
    const handleImageChange = (e) => {
      const files = Array.from(e.target.files);
  
      files.forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreviews(prevPreviews => [...prevPreviews, reader.result]);
        };
        reader.readAsDataURL(file);
      });

      setImages(prevImages => [...prevImages, ...files]);
    };
    const handelOnClickSupprimerButton = (e) => {
      
      console.log("suppression matériels"+materielItem.materielId)
      axios
      .get("http://localhost:8082/api/materiels/supprimer?idMat="+materielItem.materielId)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error);
    });
  
      
    };
  
    const removeImage = (index) => {
      setImages(prevImages => prevImages.filter((_, i) => i !== index));
      setImagePreviews(prevPreviews => prevPreviews.filter((_, i) => i !== index));
    };
  
    const addImage = () => {
      const input = document.createElement('input');
      input.type = 'file';
      input.multiple = true;
      input.accept = 'image/*';
      input.style.display = 'none';
      input.addEventListener('change', handleImageChange);
      document.body.appendChild(input);
      input.click();
      document.body.removeChild(input);
    };
    return ( 
      <>
        <a href="#">
          <i
            className="fa fa-trash-o ms-1 text-theme"
            aria-hidden="true"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdropSupprMat"
          />
        </a>
        <div
          className="modal fade"
          id="staticBackdropSupprMat"
          // data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Suppression Produits
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <ul>
                  <li>Nom : {materielItem.nomMat}</li><br/>
                  <li>Description : {materielItem.descriptionMat}</li><br/>
                  <li>Catégories : {materielItem.categorieMat}</li><br/>
                  

                </ul>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Annuler
                </button>
                <input type="button" className="btn btn-primary" value={"Supprimer Materiel"} onClick={handelOnClickSupprimerButton} data-bs-dismiss="modal"  />
                
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }  
export default SupprimerMateriel;
