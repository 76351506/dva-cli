const context = require.context('./model', false, /\.js$/);
const getModel = context.keys().map(key => context(key));

export function createModel(app) {
    return getModel.map(key => app.model(key.default))
};