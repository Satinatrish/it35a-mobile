import {IonPage,IonHeader,IonToolbar,IonTitle,IonContent,IonSplitPane,IonMenu,IonRouterOutlet,IonMenuToggle,IonIcon,IonItem,IonButton} from "@ionic/react";

import { Redirect, Route } from "react-router-dom";
import Home from "./Home";
import { homeOutline, logOutOutline } from "ionicons/icons";

const Menu: React.FC = () => {

  const paths = [
    { name: 'Home', url: '/app/home', icon: homeOutline },
    { name: 'About', url: '/app/about', icon: homeOutline }
  ];

  return (
    <IonPage>
      <IonSplitPane contentId="main">

        {/* SIDE MENU */}
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent>
            {paths.map((item, index) => (
              <IonMenuToggle key={index}>
                <IonItem routerLink={item.url} routerDirection="forward">
                  <IonIcon icon={item.icon} slot="start" />
                  {item.name}
                </IonItem>
              </IonMenuToggle>
            ))}

            <IonButton routerLink="/app/home" routerDirection="forward" expand="full">
              <IonIcon icon={homeOutline} slot="start" />
              Home
            </IonButton>

            <IonButton routerLink="/app/about" routerDirection="forward" expand="full">
            About
            </IonButton>

            <IonButton routerLink="/" routerDirection="back" expand="full">
              <IonIcon icon={logOutOutline} slot="start" />
              Logout
            </IonButton>
          </IonContent>
        </IonMenu>

        {/* MAIN CONTENT */}
        <IonRouterOutlet id="main">
          <Route exact path="/app/home" component={Home} />
          <Route exact path="/app">
            <Redirect to="/app/home" />
          </Route>
        </IonRouterOutlet>

      </IonSplitPane>
    </IonPage>
  );
};

export default Menu;