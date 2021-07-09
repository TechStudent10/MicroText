const customTitlebar = require('custom-electron-titlebar');
const { Menu } = require('electron').remote

titlebar = new customTitlebar.Titlebar({
    backgroundColor: customTitlebar.Color.fromHex('#444')
});

menu = new Menu();