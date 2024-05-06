import React, { useState } from "react";

function SupprimerMateriel({materielItem}) {
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);


  console.log("bonjour suppression")

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviews((prevPreviews) => [...prevPreviews, reader.result]);
      };
      reader.readAsDataURL(file);
    });

    setImages((prevImages) => [...prevImages, ...files]);
  };

  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setImagePreviews((prevPreviews) =>
      prevPreviews.filter((_, i) => i !== index)
    );
  };

  const addImage = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.multiple = true;
    input.accept = "image/*";
    input.style.display = "none";
    input.addEventListener("change", handleImageChange);
    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
  };

  return (
    <>
      <a href="#">
        <i
          className="fas fa-trash-alt ms-1 text-theme"
          aria-hidden="true"
          data-bs-toggle="modal" data-bs-target="#exampleModal"
        />
      </a>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Suppression de Produits
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fermer
              </button>
              <input
                type="button"
                className="btn btn-primary"
                value={"Suprimer cette element"}
                data-bs-dismiss="modal"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SupprimerMateriel;
