import mongoose from 'mongoose';

const AssignmentSchema = new mongoose.Schema({
  teacherId: {
    type: String,
    required: true,
  },
  subjectName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dueDate: {
    type: String, // або `Date`, якщо ти хочеш працювати з датами як об'єктами
    required: true,
  },
  classId: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, // автоматично додає createdAt і updatedAt
});

export default mongoose.models.Assignment || mongoose.model('Assignment', AssignmentSchema);
