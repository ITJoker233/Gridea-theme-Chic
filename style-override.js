const generateOverride = (params = {}) => {
    let result = ''

    // language
    if (params.language && params.language !== 'en') {
        result += `
        .en{
          display:none;
        }
        #menu-toggle-en {display:none;}
    `
    } else {
        result += `
        .zh{
          display:none;
        }
        #menu-toggle-zh {display:none;}
    `
    }
    // website-font-family
    if (params.siteFont) {
        result += `
      html {
        font-family: ${params.siteFont};
      }
    `
    }
    return result
}

module.exports = generateOverride