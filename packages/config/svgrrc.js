module.exports = {
  icon: true,
  ext: 'tsx',
  svgoConfig: {
    plugins: [
      {
        removeDimensions: true,
      },
    ],
  },
  replaceAttrValues: {
    '#000': "{props.color || 'currentColor'}",
    '#000000': "{props.color || 'currentColor'}",
    '#00717f': "{props.color || 'currentColor'}",
    '#040505': "{props.color || 'currentColor'}",
    '#040506': "{props.color || 'currentColor'}",
    '#1D1D1B': "{props.color || 'currentColor'}",
    '#231F20': "{props.color || 'currentColor'}",
    '#231f20': "{props.color || 'currentColor'}",
    '#2B2B2A': "{props.color || 'currentColor'}",
    '#4990E2': "{props.color || 'currentColor'}",
    '#C6062E': "{props.color || 'currentColor'}",
    '#E29300': "{props.color || 'currentColor'}",
    currentColor: "{props.color || 'currentColor'}",
  },
  template(
    { template },
    opts,
    { imports, componentName, props, jsx, exports }
  ) {
    const typeScriptTpl = template.smart({ plugins: ['typescript'] });
    componentName.name = componentName.name.replace('Svg', '');
    const name = componentName;
    return typeScriptTpl.ast`
    /* eslint-disable import/newline-after-import */

    import * as React from 'react';

    export const ${name} = (props: React.SVGProps<SVGSVGElement>) => ${jsx};

    export default ${name};
  `;
  },
};
