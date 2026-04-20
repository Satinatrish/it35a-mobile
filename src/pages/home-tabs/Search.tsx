import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from "@ionic/react";

const Search: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons>
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Search</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen></IonContent>
        </IonPage>
    );
}
export default Search;