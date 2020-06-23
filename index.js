const { Plugin } = require('powercord/entities');

module.exports = class Clapify extends Plugin {
  startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'clapify',
      description: 'Clapify 👏 your 👏 text!',
      usage: '{c} [text]', 
      executor: (args) => ({
        send: true, 
        result: args.join(" 👏 ")
      })
    });
  }

  pluginWillUnload () {
    powercord.api.commands.unregisterCommand('clapify');
  }
};