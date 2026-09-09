import Note from "../models/Note";
import { AppError } from "../errors/app-error";
import { HTTP_STATUS } from "../constants/http-status";
import { MESSAGES } from "../constants/message";
import { CreateNoteDTO } from "../interfaces/note.create.dto";
import { UpdateNoteDTO } from "../interfaces/note.update.dto";

export class NoteService {
  async createNote(data: CreateNoteDTO) {
    const note = await Note.create({
      title: data.title.trim(),
      content: data.content ? data.content.trim() : "",
      userId: data.userId,
    });
    return note;
  }

  async getUserNotes(userId: string, search?: string) {
    const query: Record<string, unknown> = { userId };

    if (search && search.trim().length > 0) {
      query.$or = [
        { title: { $regex: search.trim(), $options: "i" } },
        { content: { $regex: search.trim(), $options: "i" } },
      ];
    }

    const notes = await Note.find(query).sort({ updatedAt: -1 });
    return notes;
  }

  async getNoteById(noteId: string, userId: string) {
    const note = await Note.findOne({ _id: noteId, userId });

    if (!note) {
      throw new AppError(HTTP_STATUS.NOT_FOUND, MESSAGES.NOTE_MESSAGES.NOT_FOUND);
    }

    return note;
  }

  async updateNote(noteId: string, userId: string, data: UpdateNoteDTO) {
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

  async deleteNote(noteId: string, userId: string) {
    const note = await Note.findOneAndDelete({ _id: noteId, userId });

    if (!note) {
      throw new AppError(HTTP_STATUS.NOT_FOUND, MESSAGES.NOTE_MESSAGES.NOT_FOUND);
    }

    return note;
  }
}

export const noteService = new NoteService();
