export const NAME = "cal_faerun";
export const TITLE = "Faerun Calendar";
export const SHORTNAME = "cal";
export const PATH = "scripts/";

/**
 * Stores information about well known game systems. All other systems will resolve to "other"
 */
export const KNOWN_GAME_SYSTEMS = {
    dnd5e: {
        id: "dnd5e",
        name: "Dungeons & Dragons 5th Edition"
    }
} 

export const DEFAULT_CONFIG = {
    fCal: {
        id: "fCal",
        title: "Faerun Calendar",
        buttonId: "fcal-button"
    }
}

export const SETTING_KEYS = {
    fCal: {
        menu: "fCal",
        config: "fCalConfig"
    }
}

