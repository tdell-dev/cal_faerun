import { DEFAULT_CONFIG, GADGETS, NAME, PATH, SETTING_KEYS, WIKIPATH } from "./butler.js";
import { Sidekick } from "./sidekick.js";
import AboutApp from "./about.mjs"
//export ID = "faerun-calendar"
//export TITLE = "Calendar of Harptos"
//export BUTTONID = "faerun-calendar-button"

export class FCal extends FormApplication {

    constructor(object, options={}) {
      super(object, options);
 
      this.currentGadgetId = object?.currentGadget?.id || null;
      this.firstRender = true;
      this.typewriter = null;
    }
 
    static get defaultOptions() {
      return mergeObject( super.defaultOptions, {
        id: "faerun-calendar",
        title: "Calendar of Harptos",
        template:`${PATH}/templates/faerun-calendar.html`
        width: 750,
        height: "auto",
        top: 200,
        left: 400,
        background: "#000",
        resizable: true,
        closeOnSubmit: false
      });
    }

    getData() {
        const moduleVersion = game.modules.get(NAME)?.data?.version;
        const username = game.user.name;
        const menus = [];
        return {
            moduleVersion,
            username,
            menus
        }
    }

    /**
     * Gets/creates header buttons
     */
    _getHeaderButtons() {
        let buttons = super._getHeaderButtons();
        return buttons
    }

    /**
     * Activate listeners on the html
     * @param {*} html 
     */
    activateListeners(html) {
        super.activateListeners(html);
    }

    /**
     * App close method
     * @override
     */
    close() {
        super.close();
    }

    /**
     * Handles render hook
     * @param {*} html 
     */
    static _onRender(app, html, data) {
        const header = html.find("header");
        const appTitle = header.find(`:contains("${app.title}")`);
        app.firstRender = false;
    }
}


export function createFaerunCalButton(html) {
    const FDiv = html.find("#fcal");

    const fCalButton = $(
        `<button id="${BUTTONID}" data-action="faerun-calendar" title="${game.i18n.localize("SETTINGS.FaerunCalendar.ButtonH")}">
            <i class="fas fa-desktop"></i> ${TITLE}
        </button>`
    );
    
    FDiv.append(fCalButton);

    fCalButton.on("click", event => new Fcalendar().render(true));
}


