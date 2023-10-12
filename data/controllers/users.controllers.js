import { db } from "../data.js";

export const get = (req, res) => {
    const users = db.data.user;
    res.status(200).json({
      code: 200,
      answer: users,
    });
  };
  
//hier wird ein neuer User angelegt
  export const post = async (req, res) => {
    const { id,produkt, preis,verfügbarkeit } = req.query;
    db.data.user.push({
        id: 1,
        produkt: "Don Julio 70 Tequila Anejo Claro (0,7 Liter)",
        preis: "39,99 € + Versandkosten",
        verfügbarkeit: "Auf Lager",
    });
    await db.write();
  
    res.status(200).json({
      code: 200,
      answer: "User wurde angelegt",
    });
  };
  
  //hier wird ein User geändert

  export const put = async (req, res) => {
    const { id, produkt } = req.query; //hier wird die ID und der Name des Users aus dem Query geholt
    const user = db.data.user.find((user) => user.id === id);
    if (user) {
        user.produkt = produkt;
        await db.write(); //speichert die Daten in der JSON Datei
    }
    res.status(200).json({
      code: 200,
      answer: "User wurde geändert",
    });
  }

  //hier wird ein User gelöscht
    export const del = async (req, res) => {
        const { id } = req.query; //hier wird die ID aus dem Query geholt
        db.data.user = db.data.user.filter((user) => user.id !== id); //hier wird die ID des Users mit der ID aus dem Query verglichen und wenn sie nicht übereinstimmen, wird der User in die neue Userliste geschrieben

        await db.write(); //speichert die Daten in der JSON Datei
        res.status(200).json({
          code: 200,
          answer: "User wurde gelöscht",
        });
    }