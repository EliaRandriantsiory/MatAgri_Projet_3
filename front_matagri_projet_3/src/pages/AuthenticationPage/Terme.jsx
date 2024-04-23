import { useState } from "react";
import React, { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';

function Terme(){
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
        <>
      <a variant="Link" onClick={handleShow}>
        <b>CGV</b>
      </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">
            <h4>
            CONDITIONS GENERALES DE LOCATION
                <br/>MATERIELS AGRICOLES MatAgri
            </h4>
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
<b>ARTICLE 1</b> - Généralités
<br/>1.	Validité : Les présentes conditions de location sont considérées comme étant acceptées par le locataire, par la seule signature du contrat.
<br/>2.	Le bailleur donne en location au preneur, qui accepte, le matériel décrit dans les conditions particulières et cela pour une période également mentionnée dans les conditions particulières.
<br/>3.	Le preneur s'engage à payer le loyer au prix convenu et aux dates fixées à utiliser le matériel en bon père de famille et conformément aux stipulations du présent contrat.
<br/><b>ARTICLE 2</b>- Commencement du terme de location et réception du matériel.
<br/>1.	La présente location prend cours le jour où le matériel est mis à disposition du preneur.
<br/>2.	Les expéditions et récupérations sont à la charge du bailleur.
<br/>3.	Le bailleur mettra le matériel à disposition en bon état de fonctionnement, après avoir effectué le plein, et prêt à être mis en service. Les éventuels défauts du matériel doivent être signalés par le preneur endéans les 48 heures après la réception du matériel.
<br/><b>ARTICLE 3</b> - Acompte et paiement du loyer.

<br/>1.     Le loyer mentionné dans les conditions particulières doit être payé intégralement et anticipativement avant la livraison du matériel. Les factures sont payables au comptant dès réception.
<br/>2.     En cas de défaut de paiement du loyer suite à la validation de la commande sur la plateforme, le bailleur se réserve le droit de ne pas prendre en considération ladite commande tant que le paiement n’est pas effectué dans son intégralité.

<br/><b>ARTICLE 4</b> - Entretien du matériel loué.
<br/>1.	Le preneur est tenu d'effectuer l'entretien journalier du matériel loué et de maintenir le matériel en bon état de fonctionnement.
<br/>2.	En cas de défaut du matériel loué, le preneur en avertira immédiatement le bailleur, qui veillera à effectuer les opérations nécessaires. Les réparations nécessaires à la suite de négligence du preneur ou à la suite d'un usage anormal du matériel sont à charge du preneur et seront facturées selon le tarif habituel, auquel s'ajoutent les frais de déplacement. Le preneur ne peut en aucun cas revendiquer de réduction du loyer en cas de défaut du matériel loué.
<br/>3.	Le bailleur est autorisé en tout temps à inspecter le matériel loué et le preneur devra à cette fin donner accès au matériel à tout moment.
<br/>4.	L'entretien périodique du matériel est à charge du bailleur. Le preneur est à cette fin obligé d'informer le bailleur de la situation du compteur horaire, comme déterminé dans les conditions particulières.
<br/><b>ARTICLE 5</b> - Fin de la location.
<br/>1.	5.1. Sauf clause expresse-contraire, le preneur est tenu de restituer le matériel, à la fin de la période de location prévue, intact, en bon état de fonctionnement et après avoir effectué le plein, au bailleur ou toute autre place convenue. Le transport s'effectue aux risques du bailleur.
<br/>2.	5.2. Si, à la fin de la période de location prévue le matériel n'est pas restitué par le preneur, une indemnité égale au loyer convenu et majorée de 20% calculable journalièrement est due pour chaque jour de retard, à augmenter éventuellement d'autres frais.
<br/>3.	5.3. Si lors de la restitution du matériel il semble que le preneur ne s'est pas acquitté de son obligation d'entretien comme stipulé dans l'article 4 des conditions générales de location, une indemnité sera calculée, comme déterminée à l'article 5.2. ci-dessus, pour la période nécessaire pour remédier aux suites du défaut d'entretien. Les défauts constatés à la réception du matériel seront communiqués au preneur. Au défaut de réaction endéans les 5 jours, le preneur est présumé d'accepter l'existence des défauts constatés. En cas de désaccord entre les parties concernant les réparations à effectuer, un expert sera désigné par les deux parties afin d'examiner le matériel. Si les parties ne s'entendent pas sur la personne de l'expert à désigner, cet expert sera désigné, à la requête de la partie la plus diligente, par le Président du tribunal de commerce d’Antananarivo. Le preneur s'engage payer le frais et honoraires de l'expert dans l'attente d'une décision au fond concernant les frais de la procédure.
<br/><b>ARTICLE 6</b> - Obligations spéciales du preneur.
<br/>1.	6.1. Le preneur ne peut ni sous-louer, ni céder les droits résultant du présent contrat, ni mettre le matériel à disposition de tiers ou d'incompétents. Le matériel loué ne peut quitter le territoire de Madagascar. (Sauf accord écrit du bailleur)
<br/>2.	6.2. Si un tiers, à la suite d'une saisie gagerie, d'un saisie conservatoire ou de toute autre manière, faisait valoir des droits sur le matériel, le preneur est tenu d'en informer immédiatement par écrit le bailleur.
<br/><b>ARTICLE 7</b> - Dénonciation du contrat.
<br/>Le bailleur a le droit de mettre fin au présent contrat automatiquement et sans devoir en observer un délai de préavis, dans les cas suivants :
<br/>1.	Lorsque les factures émanant du bailleur, ne sont pas payées immédiatement par le preneur ;
<br/>2.	Lorsque le preneur, sans l'autorisation expresse et préalable du bailleur, utilise le matériel ou une partie de celui-ci pour une autre destination que celle prévue dans le contrat ;
<br/>3.	Lorsque le preneur viole les obligations prévues à l'article 4.
<br/><b>ARTICLE 8</b> - Perte et assurance du matériel loué.
<br/>1.	Lorsque le preneur, pour quelque raison que ce soit, se trouve dans l'impossibilité de satisfaire à son obligation de restituer le matériel, même si cette raison est indépendante de sa responsabilité ou si elle résultait d'un cas de force majeure, le preneur sera obligé de rembourser la valeur du matériel, comme stipulé dans les conditions particulières, indépendamment du paiement de l'indemnité prévue à l'article 5.2. laquelle sera calculée jusqu'à ce que le matériel soit totalement remboursé.
<br/>2.	A partir de la mise à disposition du matériel par le bailleur au preneur, jusqu'à la révision de celui-ci par le bailleur lors de la restitution, une police d’assurance tous risques est souscrite par le bailleur, laquelle libère le bailleur de toute responsabilité, afin de couvrir les risques de vol, d'endommagement et tous les accidents, et cela aussi bien pour les dégâts à la machine elle-même que pour les dégâts éventuellement occasionnés par ou à des tiers, ou au preneur lui-même; le preneur déclare renoncer à tout recours à l'égard du bailleur pour quelque raison que ce soit. 
<br/><b>ARTICLE 9</b> - Tribunal compétent.
<br/>1.	Les tribunaux d’Antananarivo sont les seuls compétents en ce qui concerne les litiges découlant du présent contrat.
<br/>2.	Si le locataire n'est pas propriétaire de l'immeuble où se trouve le matériel loué ou s'il cesse d'en être propriétaire pendant la durée du bail, il s'oblige à notifier au propriétaire de cet immeuble que le matériel loué ne lui appartient pas et ne peut être compris dans le privilège mentionné de l'art. 20 1° de la loi du 6 décembre 1851. La même notification devra être faite au titulaire d'un gage sur le fond de commerce ou d'un privilège agricole. Le locataire devra justifier à l'égard de la bailleresse de l'accomplissement de ces obligations.
</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}  style={{ color: "black" }} className="btn-hover">
            Sortir
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
} 
export default Terme;