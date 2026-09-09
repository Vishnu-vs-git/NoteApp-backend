import { CreateNoteDTO } from "../interfaces/note.create.dto";
import { UpdateNoteDTO } from "../interfaces/note.update.dto";
export declare class NoteService {
    createNote(data: CreateNoteDTO): Promise<import("mongoose").Document<unknown, {}, import("../models/Note").INote, {}, import("mongoose").DefaultSchemaOptions> & import("../models/Note").INote & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    getUserNotes(userId: string, search?: string): Promise<(import("mongoose").Document<unknown, {}, import("../models/Note").INote, {}, import("mongoose").DefaultSchemaOptions> & import("../models/Note").INote & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
    getNoteById(noteId: string, userId: string): Promise<import("mongoose").Document<unknown, {}, import("../models/Note").INote, {}, import("mongoose").DefaultSchemaOptions> & import("../models/Note").INote & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    updateNote(noteId: string, userId: string, data: UpdateNoteDTO): Promise<import("mongoose").Document<unknown, {}, import("../models/Note").INote, {}, import("mongoose").DefaultSchemaOptions> & import("../models/Note").INote & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    deleteNote(noteId: string, userId: string): Promise<import("mongoose").Document<unknown, {}, import("../models/Note").INote, {}, import("mongoose").DefaultSchemaOptions> & import("../models/Note").INote & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
}
export declare const noteService: NoteService;
//# sourceMappingURL=note.service.d.ts.map