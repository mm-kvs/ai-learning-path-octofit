import mongoose, { Schema } from 'mongoose';

const leaderboardSchema = new Schema(
  {
    team: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
    rank: { type: Number, required: true, min: 1 },
    points: { type: Number, required: true, min: 0 },
    period: { type: String, required: true, trim: true },
  },
  { timestamps: true, collection: 'leaderboard' },
);

export const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);