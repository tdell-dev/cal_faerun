import { registerSettings } from "./scripts/settings.js";
import { Util } from "./scripts/util.js";
import { createFaerunCalendarButton, FCalendar } from "./scripts/fcal.js";

Hooks.on("init", () => {
 registerSettings();
} 
  
Hooks.on("renderSettings", (app, html) => {
  Helper.createFDiv(html);
  createFaerunCalendarButton(html);
});

Hooks.on("renderFaerunCalendar", (app, html, data) => {
  FCalendar._onRender(app, html, data);
});

