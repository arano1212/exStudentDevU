import express from 'express'
import * as exStudentController from '../controller/exStudentsController.js'

const DevURouter = express.Router()

DevURouter.post('/exstudents', exStudentController.createExStudent)
DevURouter.get('/exstudents', exStudentController.getAllExStudent)
DevURouter.get('/exstudents/:exStudentId', exStudentController.getExStudentByID)
DevURouter.patch('/exstudents/:exStudentId', exStudentController.updateExstudentByID)
DevURouter.delete('/exstudents/:exStudentId', exStudentController.deleteExStudentController)

export default DevURouter
