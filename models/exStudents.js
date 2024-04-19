import mongoose from 'mongoose'

const exStudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dni: { type: String, required: true, unique: true },
  studies: { type: String, required: true },
  email: { type: String, unique: true },
  phone: { type: String, unique: true },
  senior_year: Number,
  company: String,
  performance: {
    type: String,
    enum: ['health', 'construction', 'education', 'customer service', 'cleaning',
      'guardians', 'fashion', 'communication', 'gossip', 'mistery', 'god']
  },
  antiquity: {
    type: Number,
    enum: [1, 2, 3, 4, 5, 10, 15, 20, 25, 50, 75, 100]
  },
  job_title: String,
  newExStudent: { type: Boolean, default: true },
  isActive: { type: Boolean, default: true }

}, { timestamps: true })

const DevU = mongoose.model('Exstudents', exStudentSchema)

export default DevU
