import Note from "../models/Note";
import { AppError } from "../errors/app-error";
import { HTTP_STATUS } from "../constants/http-status";
import { MESSAGES } from "../constants/message";
export class NoteService {
    async createNote(data) {
        const note = await Note.create({
            title: data.title.trim(),
            content: data.content ? data.content.trim() : "",
            userId: data.userId,
        });
        return note;
    }
    async getUserNotes(userId, search) {
        const query = { userId };
        if (search && search.trim().length > 0) {
            query.$or = [
                { title: { $regex: search.trim(), $options: "i" } },
                { content: { $regex: search.trim(), $options: "i" } },
            ];
        }
        const notes = await Note.find(query).sort({ updatedAt: -1 });
        return notes;
    }
    async getNoteById(noteId, userId) {
        const note = await Note.findOne({ _id: noteId, userId });
        if (!note) {
            throw new AppError(HTTP_STATUS.NOT_FOUND, MESSAGES.NOTE_MESSAGES.NOT_FOUND);
        }
        return note;
    }
    async updateNote(noteId, userId, data) {
        const note = await Note.findOne({ _id: noteId, userId });
        if (!note) {
            throw new AppError(HTTP_STATUS.NOT_FOUND, MESSAGES.NOTE_MESSAGES.NOT_FOUND);
        }
        if (data.title !== undefined) {
            note.title = data.title.trim();
        }
        if (data.content !== undefined) {
            note.content = data.content.trim();
        }
        await note.save();
        return note;
    }
    async deleteNote(noteId, userId) {
        const note = await Note.findOneAndDelete({ _id: noteId, userId });
        if (!note) {
            throw new AppError(HTTP_STATUS.NOT_FOUND, MESSAGES.NOTE_MESSAGES.NOT_FOUND);
        }
        return note;
    }
}
export const noteService = new NoteService();
//# sourceMappingURL=note.service.js.map