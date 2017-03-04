import configBuild from './configureStore.build';
import configDev from './configureStore.dev';

export default (process.env.NODE_ENV === 'production') ? configBuild : configDev;
