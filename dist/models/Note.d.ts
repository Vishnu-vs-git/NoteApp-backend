import mongoose, { Document, Types } from "mongoose";
export interface INote extends Document {
    title: string;
    content: string;
    userId: Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
}
declare const _default: mongoose.Model<INote, {}, {}, {}, Document<unknown, {}, INote, {}, mongoose.DefaultSchemaOptions> & INote & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, INote>;
export default _default;
//# sourceMappingURL=Note.d.ts.map