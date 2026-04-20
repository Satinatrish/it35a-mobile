
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonItem, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonList, IonGrid, IonRow, IonCol, IonIcon, IonLabel } from '@ionic/react';
import { chatboxEllipsesOutline, shareOutline, thumbsUpOutline } from 'ionicons/icons';


const Feed: React.FC = () =>{
 
   const games = [
          { name:'Block Blast' , subtitle:'Subtitle' },
          { name:'Counter Strike' },
          { name:'Floppy Bird' },
          { name:'Plants VS. Zombies' },
          { name:'FIFA' },
   ];

      return(
           <IonPage>
              <IonHeader>
                  <IonToolbar>
                    <IonButtons>
                        <IonMenuButton></IonMenuButton>
                        <IonTitle>Feed</IonTitle>
                  </IonButtons>

                 </IonToolbar>
              </IonHeader>
               <IonContent className="ion-padding">
                <IonList inset={true}>

                  {games.map((item) => (
                   <IonItem>
                     <IonCard>
                         <IonGrid>
                           <IonRow>
                              <IonCol>
                                   <img style={{width:"200px", height:"200px"}} alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                                </IonCol>
                                <IonCol>
                                     <IonCardHeader>
                                          <IonCardTitle>{item.name}</IonCardTitle>
                                          <IonCardSubtitle>{item.subtitle}</IonCardSubtitle>
                                     </IonCardHeader>
                                    <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
                               </IonCol>
                              
                               </IonRow>
                        </IonGrid>
                        <IonGrid>
                            <IonRow>
                            <IonCol>
                                <IonButtons>
                                   <IonIcon icon={thumbsUpOutline}></IonIcon>
                                   <IonLabel style={{marginLeft:"3px"}}> Like</IonLabel>
                                </IonButtons>
                            </IonCol>
                            <IonCol>
                                <IonButtons>
                                   <IonIcon icon={chatboxEllipsesOutline}></IonIcon>
                                   <IonLabel style={{marginLeft:"3px"}}> Comment</IonLabel>
                                  </IonButtons>
                            </IonCol>
                            <IonCol>
                               <IonButtons>
                                   <IonIcon icon={shareOutline}></IonIcon>
                                   <IonLabel style={{marginLeft:"3px"}}> Share</IonLabel>
                               </IonButtons>
                            </IonCol>
                            </IonRow>
                        </IonGrid>
                   
                    </IonCard>
                  </IonItem>

              ))}
              
              </IonList>
         </IonContent>
      </IonPage>
      );

};
export default Feed;

