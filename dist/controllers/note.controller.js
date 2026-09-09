import { noteService } from "../services/note.service";
import { sendResponse } from "../utils/send.response";
import { HTTP_STATUS } from "../constants/http-status";
import { MESSAGES } from "../constants/message";
export class NoteController {
    async createNote(req, res, next) {
        try {
            const userId = req.user.userId;
            const note = await noteService.createNote({
                ...req.body,
                userId,
            });
            return sendResponse(res, {
                statusCode: HTTP_STATUS.CREATED,
                message: MESSAGES.NOTE_MESSAGES.CREATE_SUCCESS,
                data: note,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getNotes(req, res, next) {
        try {
            const userId = req.user.userId;
            const search = req.query.search;
            console.log("hello");
            const notes = await noteService.getUserNotes(userId, search);
            return sendResponse(res, {
                statusCode: HTTP_STATUS.OK,
                message: MESSAGES.NOTE_MESSAGES.FETCH_SUCCESS,
                data: notes,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getNoteById(req, res, next) {
        try {
            const userId = req.user.userId;
            const { id } = req.params;
            const note = await noteService.getNoteById(String(id), userId);
            return sendResponse(res, {
                statusCode: HTTP_STATUS.OK,
                message: MESSAGES.NOTE_MESSAGES.FETCH_SUCCESS,
                data: note,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async updateNote(req, res, next) {
        try {
            const userId = req.user.userId;
            const { id } = req.params;
            const note = await noteService.updateNote(String(id), userId, req.body);
            return sendResponse(res, {
                statusCode: HTTP_STATUS.OK,
                message: MESSAGES.NOTE_MESSAGES.UPDATE_SUCCESS,
                data: note,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async deleteNote(req, res, next) {
        try {
            const userId = req.user.userId;
            const { id } = req.params;
            await noteService.deleteNote(String(id), userId);
            return sendResponse(res, {
                statusCode: HTTP_STATUS.OK,
                message: MESSAGES.NOTE_MESSAGES.DELETE_SUCCESS,
            });
        }
        catch (error) {
            next(error);
        }
    }
}
export const noteController = new NoteController();
//# sourceMappingURL=note.controller.js.map