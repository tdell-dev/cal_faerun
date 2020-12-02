import * as BUTLER from "./butler.js";
import { Sidekick } from "./sidekick.js";
import { registerSettings } from "./settings.js";
import { createFCalButton, FCal } from "./fcal.js";

export class Signal {

    static lightUp() {
        Hooks.on("init", () => {
            game.cal = game.cal || {};
            Sidekick.handlebarsHelpers();
            Sidekick.jQueryHelpers();
            registerSettings();
        });

        Hooks.on("canvasInit", () => {
        });

        Hooks.on("ready", () => {
        });
        
        Hooks.on("renderSettings", (app, html) => {
            Sidekick.createFCalDiv(html);
            createFCalButton(html);
        });

        Hooks.on("renderFcal", (app, html, data) => {
            FCal._onRender(app, html, data);
        });
    }

}
