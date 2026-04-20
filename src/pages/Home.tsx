import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";
import Feed from "./home-tabs/Feed";
import Favorites from "./home-tabs/Favorites";
import Search from "./home-tabs/Search";
import { bookOutline, search, star } from "ionicons/icons";
const Home: React.FC = () => {
  const tabs = [
    {name: "Feed", tab: 'feed',url: "/app/home/feed", icon:bookOutline},
    {name: "Search", tab: 'search',url: "/app/home/search", icon:search},
    {name: "Favorites", tab: 'favorites',url: "/app/home/favorites", icon:star},
    ]

    return (
        <IonReactRouter>
          <IonTabs>
          <IonTabBar slot="bottom">
            <IonToolbar>
              <IonTitle>Tabs</IonTitle>
            </IonToolbar>
            {tabs.map((tab, index) => (
              <IonTabButton key={index} tab={tab.tab} href={tab.url}>
                <IonIcon icon={tab.icon} />
                <IonLabel>{tab.name}</IonLabel>
              </IonTabButton>
            ))}

          </IonTabBar>
          <IonRouterOutlet>
            <Route exact path="/app/home/feed" component={Feed} />
            <Route exact path="/app/home" />
            <Redirect to="/app/home/feed" />
            
            <Route exact path="/app/home/search" component={Search} />
            <Route exact path="/app/home/favorites" component={Favorites} />
          </IonRouterOutlet>
          </IonTabs>
        </IonReactRouter>
    );
};
export default Home;