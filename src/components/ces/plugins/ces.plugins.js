let Plugins = (function () {
    return {
        module: 'Plugins'
    }
})();

import Http from './http.js';
import Camera from './camera.js';
import Cache from './cache.js';
import Scan from './scan.js';
import SignName from './signName.js';


Plugins.Http = Http;
Plugins.Camera = Camera;
Plugins.Cache = Cache;
Plugins.Scan = Scan;
Plugins.SignName = SignName;

export default Plugins;
