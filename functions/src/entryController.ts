import {Response} from "express";
import {db} from "./config/firebase";

type EntryType = {
  title: string,
  text: string,
  coverImageUrl: string,
};

type Request = {
  body: EntryType,
  params: {
    entryId: string;
  };
};

const addEntry = async (req: Request, res: Response): Promise<void> => {
  const {title, text} = req.body;

  try {
    const entry = db.collection("entries").doc();
    const entryObject = {
      id: entry.id,
      title,
      text,
    };
    entry.set(entryObject);
    res.status(200).send({
      status: "success",
      message: "Entry added successfully",
      data: entryObject,
    });
  } catch (error) {
    res.status(500).json((error as Error).message);
  }
};

export {addEntry};
