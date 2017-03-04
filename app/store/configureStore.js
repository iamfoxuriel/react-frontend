import configProd from './configureStore.prod';
import configDev from './configureStore.dev';

export default (process.env.NODE_ENV === 'production') ? configProd : configDev;
