import mongoose, { Schema } from 'mongoose';

const workoutSchema = new Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    description: { type: String, required: true, trim: true },
    difficulty: { type: String, required: true, enum: ['beginner', 'intermediate', 'advanced'] },
    durationMinutes: { type: Number, required: true, min: 1 },
    focusAreas: [{ type: String, required: true }],
    recommendedFor: [{ type: String, required: true }],
  },
  { timestamps: true },
);

export const Workout = mongoose.model('Workout', workoutSchema);