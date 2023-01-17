const StyleDictionary = require("style-dictionary");
const {
  minifyDictionary,
  fileHeader,
} = require("style-dictionary/lib/common/formatHelpers");
const t = require("style-dictionary/lib/common/transforms");
const tg = require("style-dictionary/lib/common/transformGroups");

const formattedVariables = require("style-dictionary/lib/common/formatHelpers/formattedVariables");
const tokens = require("./src");
const distFolderName = "dist";

module.exports = {
  source: ["src/**/*.json"],
  platforms: {
    // the main js exports come from these transforms.
    // Contain 'direct' values e.g color.blue.base is the hex string
    js: {
      transformGroup: "cs-web",
      buildPath: `${distFolderName}/`,
      // map through each src/tokens/*.json file
      // and create a transformed js file for it
      files: [
        ...tokens.map((tokenCategory) => [
          {
            destination: `${tokenCategory}.ts`,
            format: "ts/nested",
            options: {
              category: tokenCategory,
            },
            filter: {
              attributes: {
                category: tokenCategory,
              },
            },
            // filter: (token) => {
            //   return token.attributes.category === tokenCategory || token.category === tokenCategory;
            // },
          },
        ]),
        {
          destination: `color-flat.ts`,
          format: "ts/flat",
          options: {
            category: "color",
            type: "base",
          },
          filter: {
            attributes: {
              category: "color",
              type: "base",
            },
          },
        },
        {
          destination: `color-flat-dark.ts`,
          format: "ts/flat",
          options: {
            category: "color",
            type: "dark",
          },
          filter: {
            attributes: {
              category: "color",
              type: "dark",
            },
          },
        },
      ].flat(),
    },
    css: {
      transformGroup: "css",
      buildPath: `${distFolderName}/styles/`,
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
          options: {
            outputReferences: true,
          },
        },
      ],
    },
    // this is the whole tokens export with all metadata
    // -> import tokens from 'adslot-ui/system/tokens';
    // due to its larger size, this should only be used for documentation and the like
    jsModule: {
      buildPath: `${distFolderName}/tokens/`,
      transformGroup: "js",
      files: [
        {
          destination: `index.js`,
          format: "javascript/module",
          options: {
            outputReferences: true,
          },
        },
      ],
    },
  },
};

StyleDictionary.registerTransform({
  ...t["size/pxToRem"],
  name: `space/pxToRem`,
  matcher: function (token) {
    return token.attributes.category === "space";
  },
});
StyleDictionary.registerTransformGroup({
  name: "cs-web",
  transforms: [...tg.web, "space/pxToRem"],
});

// same as json/nested but as ts so we can get type inference
StyleDictionary.registerFormat({
  name: "ts/nested",
  formatter: function ({ dictionary, file }) {
    const { options } = file;
    return `${fileHeader({ file })}  
    const ${options.category} = ${JSON.stringify(
      minifyDictionary(dictionary.tokens[options.category]),
      null,
      2
    )}
    export default ${options.category};
    `;
  },
});

// flattened, kebab cased versions, with mode omitted. Used only for sprinkles definition.
StyleDictionary.registerFormat({
  name: "ts/flat",
  formatter: function ({ dictionary, file }) {
    const { options } = file;

    return `${fileHeader({ file })}  
  const ${options.category} = {${dictionary.allTokens
      // .filter(function (token) {
      //   // don't need to do it twice
      //   if (token.attributes.type === "dark") return false;
      //   return true;
      // })
      .map(function (token) {
        // take the mode and category out e.g:
        // we want primary-500 instead of color-base-primary-500
        const [_color, _type, ...path] = token.path;
        console.log(token.path);
        return `  "${path.join("-")}": ${JSON.stringify(token.value)}`;
      })
      .join(",\n")}
    }
    export default ${options.category};
    `;
  },
});
