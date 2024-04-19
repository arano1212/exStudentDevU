import DevU from '../models/exStudents.js'

const createExStudent = async (req, res) => {
  try {
    const newExStudent = await DevU.create(req.body)
    res.status(201).json(newExStudent)
  } catch (error) {
    res.status(400).json({ msg: 'Error creating ExStudent' })
  }
}

const getAllExStudent = async (req, res) => {
  try {
    const getExStudents = await DevU.find({ isActive: true })
    res.status(200).json(getExStudents)
  } catch (error) {
    res.status(400).json({ msg: 'Error getting Ex Stundets', error })
  }
}

const getExStudentByID = async (req, res) => {
  try {
    const exStudentById = await DevU.find({ _id: req.params.exStudentId, isACtive: true })
    res.status(200).json(exStudentById)
  } catch (error) {
    res.status(400).json({ msg: 'error gettting Ex Student By ID', error })
  }
}

const updateExstudentByID = async (req, res) => {
  try {
    const updateExstudent = await DevU.findByIdAndUpdate(req.params.exStudentId, req.body, { new: true })
    res.status(200).json(updateExstudent)
  } catch (error) {
    res.status(400).json({ msg: 'error update Ex Student', error })
  }
}

const deleteExStudentController = async (req, res) => {
  if (!req.params.exStudentId) return res.status(400).json({ msg: 'missing ex Student ID' })

  if (req.query.destroy === 'true') {
    try {
      const deleteExStudent = await DevU.findByIdAndDelete(req.params.exStudentId)
      if (deleteExStudent === null) return res.status(404).json({ msg: 'Delete Ex Student: not found' })
      return res.status(204).json()
    } catch (error) {
      res.status(400).json({ msg: 'Error deleting Ex Student', error })
    }
  }

  try {
    const updateExStudent = await DevU
      .findByIdAndUpdate(req.params.exStudentId, { isActive: false }, { new: true })
    if (updateExStudent === null) return res.status(404).json({ msg: 'delete Ex Student not found' })
    return res.status(204).json()
  } catch (error) {
    return res.status(400).json({ msg: 'Error deleting ex student', error })
  }
}

export {
  createExStudent,
  getAllExStudent,
  getExStudentByID,
  updateExstudentByID,
  deleteExStudentController
}
