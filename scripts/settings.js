import { FCalendar } from "./fcal.js";
import { Util } from "./util.js";

export function registerSettings() {
  cal_menu = {
    menu: "Faerun Calendar",
    config: "Faerun Calendar Config"
  }

  Helper.registerMenu(
    cal_menu,
    {
     name:"SETTINGS.FaerunCalendar.ButtonN",
     label:"Calendar of Harptos",
     hint:"SETTINGS.FaerunCalendar.ButtonH",
     icon:"fas fa-desktop",
     type:FCalendar,
     restricted: true
  });
}
