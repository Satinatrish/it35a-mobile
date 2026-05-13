import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {supabase} from '../lib/supabaseClient';
import { logoGoogle } from "ionicons/icons";


const Login: React.FC = () => {
 //const navigation = useIonRouter();

    //const doLogin = () => {
    //navigation.push('/app', 'forward', 'replace')
    //}
 //Google Signin
  const signInWithGoogle = async () =>{
      
       await supabase.auth.signInWithOAuth({
           provider: "google",
           options:{
               redirectTo: `${window.location.origin}/app`
           }
       });
  };




   return(
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Login </IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen >
           
           <IonButton onClick={signInWithGoogle} expand="full" fill="outline" shape="round">
            <IonIcon icon={logoGoogle} />
            Continue with Google

           </IonButton>

        </IonContent>
    </IonPage>

   );

}   

export default Login;