import { Router } from "express";
import { noteController } from "../controllers/note.controller";
import { authenticate } from "../middleware/auth.middleware";
import { validate } from "../middleware/validate.middleware";
import { createNoteSchema, updateNoteSchema } from "../validators/note.validator";

const router = Router();


router.use(authenticate);
router.post("/", validate(createNoteSchema), noteController.createNote);
router.get("/", noteController.getNotes);
router.get("/:id", noteController.getNoteById);
router.put("/:id", validate(updateNoteSchema), noteController.updateNote);
router.delete("/:id", noteController.deleteNote);

export default router;
