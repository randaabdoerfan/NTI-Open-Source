const Course = require('../models/course.model')

exports.createCourse = async (req, res) => {
    try {
        const std = req.session.student
        const { title, description, ownerId } = req.body
        if (std.studentId !== ownerId) {
           return  res.status(401).json({message:"Unauthorized: You are not the owner of this create course"})
        }
        const course = await new Course({ title, description, ownerId })
        await course.save()
        res.status(201).json("the course add to you successfully ...")
    } catch (err) { console.log(err) }
}
exports.getAllCourse = async (req, res) => {
    try {
        const std = req.session.student
        const stdId = std.studentId
        const getCourses = await Course.find({ ownerId: stdId })
        res.status(200).json(getCourses, { message: "your courses you enrolled in " })
    } catch (err) { console.log(err) }
}
exports.deleteCourse = async (req, res) => {
try {
    const std = req.session.student
    const stdId = std.studentId
    const courseId = req.params.id
    const course = await Course.findById(courseId)
    if(!course){throw new Error("course not found")}
    if(stdId !== course.ownerId.toString()){return  res.status(401).json({message:"Unauthorized: You are not the owner of this course"})}
    await Course.findByIdAndDelete(courseId)
    res.status(200).json(course,{message:"the course deleted Successfully"})
    } catch (err) { console.log(err) }
}