export class FCal extends FormApplication {

    constructor(object, options={}) {
      super(object, options);
    }
 
    static get defaultOptions() {
      return mergeObject( super.defaultOptions, {
        id: "fcal",
        title: "Faerunian Calendar of Harptos",
        template:`./templates/faerun-calendar.html`
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
        return {
            moduleVersion,
            username
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
}



Hooks.on("init", () => {
});

Hooks.on("canvasInit", () => {
});

Hooks.on("ready", () => {
});

Hooks.on("renderSettings", (app, html) => {
    //Create the div space in the settings menu
    const fcalDiv = $(
        `<div id="fcal">
             <h3>Faerunian Calendar Module Settings</h3>
        </div>`
        );

    const setupButton = html.find("button[data-action='setup']");
    setupButton.after(fcalDiv);

    //Create the button and place it within the div space

    const FDiv = html.find("#fcal");
    const FCalButton = $(
        `<button id="fcal-button" data-action="faerun-calendar" title="Faerun Calendar"}">
            <i class="fas fa-desktop"></i> Faerunian Calendar of Harptos
        </button>`
    FDiv.append(FCalButton);
    FCalButton.on("click", event => new FCal().render(true));
});

