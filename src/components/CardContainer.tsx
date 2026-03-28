import {
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
  IonButton, useIonToast, IonButtons, IonContent, IonHeader,
  IonInput, IonItem, IonModal, IonTitle, IonToolbar
} from "@ionic/react";
import { OverlayEventDetail } from "@ionic/react/dist/types/components/react-component-lib/interfaces";
import { useRef, useState } from "react";

const CardContainer: React.FC = () => {
  const [present] = useIonToast();

  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);

  const [name, setName] = useState("");
  const [flash, setFlash] = useState(false);

  const presentToast = () => {
    present({
      message: `Hello ${name || "World"}!`,
      duration: 1500,
      position: "middle",
    });
  };

  function confirm() {
    modal.current?.dismiss(input.current?.value, "confirm");
  }

  function onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === "confirm") {
      const enteredName = event.detail.data;
      setName(enteredName);

      // trigger flash effect
      setFlash(true);
      setTimeout(() => setFlash(false), 800);
    }
  }

  return (
    <div id="container">
      <IonCard>
        <IonCardHeader>
          <IonCardTitle className={flash ? "flash" : ""}>
            {name ? `Hello, ${name}!` : "Card Title"}
          </IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Here's a small text description for the card content.
        </IonCardContent>

        <IonButton fill="clear" onClick={presentToast}>
          Action 1
        </IonButton>

        <IonButton fill="clear" id="open-modal">
          Action 2
        </IonButton>
      </IonCard>

      <IonModal
        ref={modal}
        trigger="open-modal"
        onWillDismiss={onWillDismiss}
      >
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={() => modal.current?.dismiss()}>
                Cancel
              </IonButton>
            </IonButtons>

            <IonTitle>Welcome</IonTitle>

            <IonButtons slot="end">
              <IonButton strong onClick={confirm}>
                Confirm
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          <IonItem>
            <IonInput
              label="Enter your name"
              labelPlacement="stacked"
              ref={input}
              type="text"
              placeholder="Your name"
            />
          </IonItem>
        </IonContent>
      </IonModal>
    </div>
  );
};

export default CardContainer;