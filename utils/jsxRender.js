const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

async function jsxRender(pathToFile, props, callback, options = { doctype: true }) {
  const component = await import(pathToFile);

  const element = React.createElement(component.default, {
    ...this.locals,
    ...props,
  });

  const html = renderToStaticMarkup(element);
  return callback(null, options.doctype ? `<!DOCTYPE html>${html}` : html);
}

module.exports = jsxRender;
