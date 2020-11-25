import { registerSettings } from "./settings.js";
import { Util } from "./util.js";
import { createFaerunCalendarButton, FCalendar } from "./fcal.js";

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

