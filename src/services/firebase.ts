import { initializeApp } from 'firebase/app'

// Importar aqui cada serviço que será utilizado do Firebase
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

// Variável de configuração
// Para Firebase JS SDK v7.20.0 e superior, measurementId é opcional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Inicializando a aplicação no Firebase com as configurações acima
const app = initializeApp(firebaseConfig)

export const auth = getAuth();
export const database = getDatabase();