import { IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

import React, { useState, useRef } from 'react';
import {
  IonButtons,
  IonButton,
  IonModal,
  IonItem,
  IonInput,
} from '@ionic/react';

import { OverlayEventDetail } from '@ionic/core/components';

const Home: React.FC = () => {
  const [message, setMessage] = useState('');
  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);

  const onWillDismiss = (event: CustomEvent<OverlayEventDetail>) => {
    const { data } = event.detail;
    if (data) {
      setMessage(`Hello, ${data}!`);
    }
  };

  const confirm = () => {
    const name = input.current?.value;
    if (name) {
      setMessage(`Hello, ${name}!`);
      modal.current?.dismiss();
    }
  };

  return (
     <IonPage>
      <IonHeader>
        <IonToolbar>
           <IonButtons>
                    <IonMenuButton>

                    </IonMenuButton>
                </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton id="open-modal" expand="block">
          Open
        </IonButton>
        <p>{message}</p>
        <IonModal ref={modal} trigger="open-modal" onWillDismiss={(event) => onWillDismiss(event)}>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
              </IonButtons>
              <IonTitle>Welcome</IonTitle>
              <IonButtons slot="end">
                <IonButton strong={true} onClick={() => confirm()}>
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
      </IonContent>
    </IonPage>
  );
};

export default Home;