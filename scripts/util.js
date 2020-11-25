export class Util {
  static regsiterMenu(key, metadata) {
    return game.settings.registerMenu(NAME, key, metadata);
  }

  static registerSetting(key, metadata) {
    return game.settings.register(NAME, key, metadata);
  }

  static createFDiv(html) {

      const fDiv = $(
          `<div id="faerun-calendar">
                  <h4>Faerun Calendar</h4>
              </div>`
      );

      const setupButton = html.find("button[data-action='setup']");
      setupButton.after(fDiv);
  }

}
