import mongoose, { Schema } from 'mongoose';

const teamSchema = new Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    description: { type: String, required: true, trim: true },
    coach: { type: String, required: true, trim: true },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    weeklyGoalMinutes: { type: Number, required: true, min: 0 },
  },
  { timestamps: true },
);

export const Team = mongoose.model('Team', teamSchema);