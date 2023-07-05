
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import Store from './src/redux/Store';
const AppWithRedux = () => (
    <Provider store={Store}>
        <App />
    </Provider>
);

// provider is added to the App
AppRegistry.registerComponent(appName, () => AppWithRedux);


