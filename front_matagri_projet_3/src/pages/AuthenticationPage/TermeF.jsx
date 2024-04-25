import React from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function TermeF() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <a variant="Link" onClick={handleShow}>
        <b>Terme et condition de location</b>
      </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <center className="text-center">
              <h4 className="texte-center">
                CONDITIONS GENERALES DE LOCATION - LOUEUR (FOURNISSEUR) DE
                MATERIELS AGRICOLES
                <br />
                MATERIELS AGRICOLES MatAgri
              </h4>
            </center>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <b>
            La prestation « Location de matériels » est fournie par LOCAMAT,
            ci-après le loueur. Les conditions de location font partie
            intégrante du contrat de location. Par sa signature, le
            cocontractant, dit le preneur confirme avoir lu et intégralement
            accepté les conditions de location.
          </b>
          <br />
          <b>1. Prise en charge de l’équipement</b>
          <br />
          Le preneur prend en charge le matériel en bon état de fonctionnement.
          Pour l'utilisation du matériel, le loueur s'engage à expliquer son
          fonctionnement pour que le preneur puisse l'utiliser en bonne et due
          forme. Il est tenu de formuler toute réclamation au loueur au moment
          de la prise en charge dudit matériel. Le loueur ne peut être tenu
          responsable d'une défaillance ultérieure, qu'elle soit matérielle ou
          physique.
          <br />
          <b>2. Restitution de l’équipement</b>
          <br />
          Le preneur est tenu de restituer l’équipement au loueur au terme de la
          durée de location définie dans le contrat de location, et ce, pendant
          les heures d’ouverture. L’équipement ainsi que tous les accessoires
          mis à disposition par le loueur (gants, casques, etc.) doivent être
          restitués au loueur dans un état identique à celui qui lui a été
          confié. Si le preneur a perdu ou endommagé des accessoires, il est
          tenu d'en avertir le loueur, ceux-ci lui sont facturés. Les dommages
          matériels sont facturés aux tarifs publiés en magasin.
          <br />
          <b>3. Prolongation de la durée de location</b>
          <br />
          Une prolongation du contrat de location est uniquement possible avec
          l’assentiment du loueur avant la fin du contrat de location en cours.
          Le loueur peut refuser cette prolongation.
          <br />
          <b>4. Annulation de réservation</b>
          <br />
          Toute réservation se verra annulée deux heures après l'heure prévue de
          location si le preneur ne prévient pas de son retard.
          <br />
          <b>5. Âge minimal du preneur</b>
          <br />
          Le preneur doit être majeur le jour de la prise de possession du
          matériel.
          <br />
          <b>6. Prestations et prix</b>
          <br />
          Les tarifs en vigueur valables sont ceux publiés chez le loueur, sur
          sa plateforme de réservation et dans ses prospectus de l'année en
          cours.
          <br />
          <b>7. Assurance</b>
          <br />
          L’assurance est à la charge du preneur. Par sa signature du contrat de
          location, le preneur confirme avoir couvert de façon adéquate les
          risques liés à l’utilisation de l’équipement loué. L’équipement n’est
          pas assuré par le loueur contre le vol et la casse dans le cadre du
          présent contrat. Il appartient donc au preneur de se prémunir des
          risques en cas de dommage causé au matériel.
          <br />
          <b>8. Casques</b>
          <br />
          Un casque homologué est mis à disposition gratuitement à partir du
          3ème jour de location. En cas de chute, il est impératif au preneur de
          le signaler au loueur.
          <br />
          <b>9. Responsabilité du preneur</b>
          <br />
          Le preneur s'engage à utiliser le matériel loué avec prudence, sans
          danger pour les tiers et conformément au code de la route et aux
          règles de sécurité routières. Le preneur est toujours responsable des
          dommages corporels et matériels qu'il cause à l'occasion de
          l'utilisation du matériel loué (article 1242 du code civil). LOCAMAT
          ne peut être tenue responsable en cas de dommages causés ou subis par
          le preneur au cours de l’utilisation du matériel loué. L’utilisation
          en compétition ou pour une conduite analogue à une compétition est
          interdite. Lors de dommages dus à un accident, de perte, de vol ou de
          traitement inapproprié du matériel, le preneur est responsable des
          coûts de réparation. En cas de dommage total ou de perte, le preneur
          est responsable de la valeur de remplacement du matériel, celle-ci
          facturée conformément aux tarifs en vigueur et affichés en magasin.
          <br />
          <b>10. Caution</b>
          <br />
          Le loueur demande une empreinte de carte bancaire comme caution contre
          la perte, le vol ou l’endommagement du matériel.
          <br />
          <b>11. Droit applicable</b>
          <br />
          Le contrat et les conditions générales de location sont exclusivement
          régis par le droit malgache. Préalablement à toute action en justice,
          auprès du tribunal territorialement compétent, le loueur et le vendeur
          s'engagent à régler le différend qui les opposerait à l'amiable, par
          le biais, notamment, d'une procédure de conciliation.
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TermeF;
