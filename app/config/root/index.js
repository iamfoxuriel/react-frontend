import rootBuild from './root.build';
import rootDev from './root.dev';

export default (process.env.NODE_ENV === 'production') ? rootBuild : rootDev;
