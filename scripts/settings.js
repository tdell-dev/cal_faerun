import * as BUTLER from "./butler.js";
import { FCal } from "./fcal.js";
import { Sidekick } from "./sidekick.js";

export function registerSettings() {

    Sidekick.registerMenu(BUTLER.SETTING_KEYS.fCal.menu, {
        name:"SETTINGS.FaerunCalendar.ButtonN",
        label: BUTLER.DEFAULT_CONFIG.fCal.title,
        hint:"SETTINGS.FaerunCalendar.ButtonH",
        icon:"fas fa-desktop",
        type:FCal,
        restricted: true
    });

}
