import mongoose from 'mongoose';
import { Activity } from '../models/Activity.js';
import { Leaderboard } from '../models/Leaderboard.js';
import { Team } from '../models/Team.js';
import { User } from '../models/User.js';
import { Workout } from '../models/Workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Seed the octofit_db database with test data');
    console.log('Connected to octofit_db');

    await Promise.all([
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Team.deleteMany({}),
      User.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const [mona, devon, priya, alex] = await User.create([
      {
        username: 'mona-octocat',
        displayName: 'Mona Octocat',
        email: 'mona@example.com',
        age: 31,
        preferredActivities: ['running', 'yoga'],
      },
      {
        username: 'dev-runner',
        displayName: 'Devon Runner',
        email: 'devon@example.com',
        age: 28,
        preferredActivities: ['cycling', 'strength training'],
      },
      {
        username: 'priya-lifts',
        displayName: 'Priya Patel',
        email: 'priya@example.com',
        age: 35,
        preferredActivities: ['rowing', 'pilates'],
      },
      {
        username: 'alex-hikes',
        displayName: 'Alex Chen',
        email: 'alex@example.com',
        age: 42,
        preferredActivities: ['hiking', 'mobility'],
      },
    ]);

    const [octofitExplorers, cardioCoders] = await Team.create([
      {
        name: 'OctoFit Explorers',
        description: 'A balanced team focused on consistency, mobility, and outdoor endurance.',
        coach: 'Jordan Lee',
        members: [mona._id, alex._id],
        weeklyGoalMinutes: 420,
      },
      {
        name: 'Cardio Coders',
        description: 'High-energy teammates building aerobic capacity between coding sessions.',
        coach: 'Sam Rivera',
        members: [devon._id, priya._id],
        weeklyGoalMinutes: 500,
      },
    ]);

    await Activity.create([
      {
        user: mona._id,
        type: 'running',
        durationMinutes: 36,
        caloriesBurned: 330,
        distanceMiles: 3.4,
        loggedAt: new Date('2026-10-01T13:00:00Z'),
      },
      {
        user: devon._id,
        type: 'cycling',
        durationMinutes: 52,
        caloriesBurned: 610,
        distanceMiles: 14.2,
        loggedAt: new Date('2026-10-02T22:30:00Z'),
      },
      {
        user: priya._id,
        type: 'rowing',
        durationMinutes: 28,
        caloriesBurned: 255,
        distanceMiles: 4.1,
        loggedAt: new Date('2026-10-03T12:15:00Z'),
      },
      {
        user: alex._id,
        type: 'hiking',
        durationMinutes: 95,
        caloriesBurned: 720,
        distanceMiles: 5.8,
        loggedAt: new Date('2026-10-04T16:45:00Z'),
      },
    ]);

    await Leaderboard.create([
      {
        team: cardioCoders._id,
        rank: 1,
        points: 1280,
        period: '2026-W40',
      },
      {
        team: octofitExplorers._id,
        rank: 2,
        points: 1165,
        period: '2026-W40',
      },
    ]);

    await Workout.create([
      {
        name: '5K Builder',
        description: 'A progressive run-walk session for improving easy aerobic capacity.',
        difficulty: 'beginner',
        durationMinutes: 32,
        focusAreas: ['cardio', 'endurance'],
        recommendedFor: ['running', 'general fitness'],
      },
      {
        name: 'Desk Reset Mobility',
        description: 'A low-impact mobility flow for hips, shoulders, and thoracic rotation.',
        difficulty: 'beginner',
        durationMinutes: 18,
        focusAreas: ['mobility', 'recovery'],
        recommendedFor: ['mobility', 'yoga'],
      },
      {
        name: 'Core Strength Circuit',
        description: 'A bodyweight circuit targeting core stability and posterior-chain control.',
        difficulty: 'intermediate',
        durationMinutes: 40,
        focusAreas: ['strength', 'core'],
        recommendedFor: ['strength training', 'pilates'],
      },
      {
        name: 'Hill Power Ride',
        description: 'A structured indoor cycling workout with climbing intervals and recovery spins.',
        difficulty: 'advanced',
        durationMinutes: 55,
        focusAreas: ['cycling', 'power'],
        recommendedFor: ['cycling', 'endurance'],
      },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
