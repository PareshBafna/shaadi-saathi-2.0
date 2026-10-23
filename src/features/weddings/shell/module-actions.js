// Actions of the module that is open right now. Set by workspace.js when a module loads.
let current = {};

export const setModuleActions = actions => { current = actions || {}; };
export const getModuleActions = () => current;
