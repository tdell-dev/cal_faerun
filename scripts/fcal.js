export ID = "faerun-calendar"
export TITLE = "Calendar of Harptos"
export BUTTONID = "faerun-calendar-button"

export class FCalendar extends FormApplication {
  constructor(object, options={}) {
    super(object, options);
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

  close() {
    super.close();
  }
}


export function createFaerunCalendarButton(html) {
    const FDiv = html.find("#faerun-calendar");

    const faerunCalendarButton = $(
        `<button id="${BUTTONID}" data-action="faerun-calendar" title="${game.i18n.localize("SETTINGS.FaerunCalendar.ButtonH")}">
            <i class="fas fa-desktop"></i> ${TITLE}
        </button>`
    );
    
    FDiv.append(faerunCalendarButton);

    faerunCalendarButton.on("click", event => new Fcalendar().render(true));
}


