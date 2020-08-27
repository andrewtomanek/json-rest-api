export interface LanguageStrings {
  header: string;
  createHeader: string;
  defaultText: string;
  postLabel: string;
  postContent: string;
  homeButton: string;
  createRoute: string;
  languageVariety: string;
  editButton: string;
  deleteButton: string;
  detailButton: string;
}

export const langData: {
  [key: string]: LanguageStrings;
} = {
  "cs-CZ": {
    header: "Poznámky",
    createHeader: "Vytvořit novou poznámku",
    defaultText: "Nákup",
    postLabel: "Titul poznámky",
    postContent: "Text poznámky",
    homeButton: "Domů",
    createRoute: "Vytvořit",
    languageVariety: "Česky",
    editButton: "Odeslat",
    deleteButton: "Smazat",
    detailButton: "Detail",
  },
  "en-US": {
    header: "Notes",
    createHeader: "Create new note",
    defaultText: "Go shopping",
    postLabel: "Note title",
    postContent: "Note content",
    homeButton: "Home",
    createRoute: "Create",
    languageVariety: "English",
    editButton: "Send",
    deleteButton: "Delete",
    detailButton: "Detail",
  },
  "ru-RU": {
    header: "заметки",
    createHeader: "творить заметки",
    defaultText: "магазин ",
    postLabel: "заметки Суть",
    postContent: "заметки Суть",
    homeButton: "дома ",
    createRoute: "творить",
    languageVariety: "Pусский",
    editButton: "редактировать",
    deleteButton: "удалить",
    detailButton: "подробно",
  },
};
