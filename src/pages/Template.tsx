import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const Template: React.FC = () => {
   return(
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons>
                    <IonMenuButton>

                    </IonMenuButton>
                </IonButtons>
                <IonTitle>Template </IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen >

        </IonContent>
    </IonPage>

   );

}

export default Template;