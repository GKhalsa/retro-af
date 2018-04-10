import { base } from '../base';
import * as panelConstants from '../constants/panelNameConstants';

const archivePanel = (path, panelName) => {
    base.post(`${path}/${panelName}`, {
        data: null
    });
};

const archiveFullRetro = (path) => {
    archivePanel(path, panelConstants.HAPPY);
    archivePanel(path, panelConstants.MEH);
    archivePanel(path, panelConstants.SAD);
};

export {archiveFullRetro}