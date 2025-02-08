import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jl-theme-src extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jl-theme-src:plugin',
  description: 'A theme for Jupyter',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension jl-theme-src is activated!');
    const style = 'jl-theme-src/index.css';

    manager.register({
      name: 'jl-theme-src',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
