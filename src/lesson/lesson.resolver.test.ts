import * as lesson_resolver from "./lesson.resolver"
import * as lesson_service from "./lesson.service"
import * as student_service from "../student/student.service"

import * as class_transformer from "class-transformer"
import * as lesson_input from "./lesson.input"
import * as assign_students_to_lesson_input from "./assign-students-to-lesson.input"
import * as lesson_entity from "./lesson.entity"
describe("lesson", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new lesson_service.LessonService(undefined)
        inst2 = new student_service.StudentService(undefined)
        inst3 = new lesson_resolver.LessonResolver(inst, inst2)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst3.lesson("a85a8e6b-348b-4011-a1ec-1e78e9620782")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst3.lesson("7289708e-b17a-477c-8a77-9ab575c4b4d8")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst3.lesson("03ea49f8-1d96-4cd0-b279-0684e3eec3a9")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst3.lesson("")
        }
    
        expect(callFunction).not.toThrow()
    })
})

describe("lessons", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new lesson_service.LessonService(undefined)
        inst2 = new student_service.StudentService(undefined)
        inst3 = new lesson_resolver.LessonResolver(inst, inst2)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst3.lessons()
        }
    
        expect(callFunction).not.toThrow()
    })
})

describe("createLesson", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new lesson_service.LessonService(undefined)
        inst2 = new student_service.StudentService(undefined)
        inst3 = new lesson_resolver.LessonResolver(inst, inst2)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst3.createLesson(class_transformer.plainToClass(lesson_input.CreateLessonInput,{ name: "Michael", startDate: "processing", endDate: "32-01-2020", students: ["b", "c", "a", "c", "b"] }))
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst3.createLesson(class_transformer.plainToClass(lesson_input.CreateLessonInput,{ name: "Jean-Philippe", startDate: "processing", endDate: "01-01-2030", students: ["a"] }))
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst3.createLesson(class_transformer.plainToClass(lesson_input.CreateLessonInput,{ name: "Jean-Philippe", startDate: "canceled", endDate: "32-01-2020", students: ["a", "c", "c"] }))
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst3.createLesson(class_transformer.plainToClass(lesson_input.CreateLessonInput,{ name: "George", startDate: "pending", endDate: "01-01-2030", students: ["a", "a", "a", "a", "b"] }))
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst3.createLesson(class_transformer.plainToClass(lesson_input.CreateLessonInput,{ name: "Michael", startDate: "done", endDate: "01-01-2030", students: ["c", "b"] }))
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst3.createLesson(class_transformer.plainToClass(lesson_input.CreateLessonInput,{ name: "", startDate: "", endDate: "", students: [] }))
        }
    
        expect(callFunction).not.toThrow()
    })
})

describe("assignStudentsToLesson", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new lesson_service.LessonService(undefined)
        inst2 = new student_service.StudentService(undefined)
        inst3 = new lesson_resolver.LessonResolver(inst, inst2)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst3.assignStudentsToLesson(class_transformer.plainToClass(assign_students_to_lesson_input.AssignStudentsToLessonInput,{ lessonId: 9876, studentIds: ["Intelligent"] }))
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst3.assignStudentsToLesson(class_transformer.plainToClass(assign_students_to_lesson_input.AssignStudentsToLessonInput,{ lessonId: "da7588892", studentIds: ["Gorgeous", "Intelligent", "Gorgeous"] }))
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst3.assignStudentsToLesson(class_transformer.plainToClass(assign_students_to_lesson_input.AssignStudentsToLessonInput,{ lessonId: "bc23a9d531064583ace8f67dad60f6bb", studentIds: ["Rustic", "Rustic", "Rustic"] }))
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst3.assignStudentsToLesson(class_transformer.plainToClass(assign_students_to_lesson_input.AssignStudentsToLessonInput,{ lessonId: "bc23a9d531064583ace8f67dad60f6bb", studentIds: ["Awesome"] }))
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst3.assignStudentsToLesson(class_transformer.plainToClass(assign_students_to_lesson_input.AssignStudentsToLessonInput,{ lessonId: 12345, studentIds: ["Intelligent", "Gorgeous", "Tasty"] }))
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst3.assignStudentsToLesson(class_transformer.plainToClass(assign_students_to_lesson_input.AssignStudentsToLessonInput,{ lessonId: "", studentIds: [] }))
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("students", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new lesson_service.LessonService(undefined)
        inst2 = new student_service.StudentService(undefined)
        inst3 = new lesson_resolver.LessonResolver(inst, inst2)
    })

    test("0", async () => {
        await inst3.students(class_transformer.plainToClass(lesson_entity.Lesson,{ name: "Michael", startDate: "draft", endDate: "01-01-2020", students: ["1.0.0", "^5.0.0", "1.0.0", "4.0.0-beta1\t"] }))
    })

    test("1", async () => {
        await inst3.students(class_transformer.plainToClass(lesson_entity.Lesson,{ name: "Anas", startDate: "done", endDate: "01-01-2020", students: ["v4.0.0-rc.4", "^5.0.0", "v4.0.0-rc.4", "v4.0.0-rc.4", "4.0.0-beta1\t"] }))
    })

    test("2", async () => {
        await inst3.students(class_transformer.plainToClass(lesson_entity.Lesson,{ name: "Edmond", startDate: "done", endDate: "01-13-2020", students: ["1.0.0", "^5.0.0", "1.0.0", "v1.2.4", "^5.0.0"] }))
    })

    test("3", async () => {
        await inst3.students(class_transformer.plainToClass(lesson_entity.Lesson,{ name: "Michael", startDate: "done", endDate: "01-13-2020", students: ["^5.0.0"] }))
    })

    test("4", async () => {
        await inst3.students(class_transformer.plainToClass(lesson_entity.Lesson,{ name: "Edmond", startDate: "draft", endDate: "01-01-2030", students: ["1.0.0"] }))
    })

    test("5", async () => {
        await inst3.students(class_transformer.plainToClass(lesson_entity.Lesson,{ name: "", startDate: "", endDate: "", students: [] }))
    })
})
