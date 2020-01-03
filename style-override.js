const generateOverride = (params = {}) => {
    let result = ''

    // 语言设置
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

    return result
}

module.exports = generateOverride