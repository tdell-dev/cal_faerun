export const PATH = "modules/cal_faerun";
export class FCal extends FormApplication {

    constructor(object, options={}) {
      super(object, options);
    }
 
    static get defaultOptions() {
      return mergeObject( super.defaultOptions, {
        id: "fcal-window",
        title: "Faerunian Calendar of Harptos",
        template: `${PATH}/templates/faerun-calendar.html`,
        width: 1200,
        height: 400,//"auto",
        top: 0,//200,
        left: 0,//400,
        background: "#000",
        resizable: false,
        closeOnSubmit: false
      });
    }

    getData() {
        const username = game.user.name;
        return {
            username
        };
    }

    /**
     * Gets/creates header buttons
     */
    _getHeaderButtons() {
        let buttons = super._getHeaderButtons();
        return buttons;
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
}



Hooks.on("init", () => {
    console.warn("Hello World! This is Faerunian Calendar of Harptos reporting.  Just checking that the file is loaded.");
});

Hooks.on("canvasInit", () => {
});

Hooks.on("ready", () => {
});

Hooks.on("renderSettings", (app, html) => {
    console.warn("Faerunian Calendar of Harptos entering renderSettings.");
    //Create the div space in the settings menu
    const fcalDiv = $(
        `<div id="fcal-settings-button-div">
             <h3>Faerunian Calendar Module Settings</h3>
        </div>`
        );

    console.warn("Faerunian Calendar of Harptos created fcalDiv");

    const setupButton = html.find("button[data-action='setup']");
    console.warn("Faerunian Calendar of Harptos found setup button");
    setupButton.after(fcalDiv);
    console.warn("Faerunian Calendar of Harptos placed fcalDiv");

    //Create the button and place it within the div space

    const FDiv = html.find("#fcal-settings-button-div");
    console.warn("Faerunian Calendar of Harptos found fcalDiv");
    const FCalButton = $(
        `<button id="fcal-settings-button" data-action="faerun-calendar" title="Faerun Calendar"}">
            <i class="fas fa-desktop"></i> Faerunian Calendar of Harptos
        </button>`);
    console.warn("Faerunian Calendar of Harptos created button");
    FDiv.append(FCalButton);
    console.warn("Faerunian Calendar of Harptos appended button");

    FCalButton.on("click", event => new FCal().render(true));
    console.warn("Faerunian Calendar of Harptos registered button click callback");
});

