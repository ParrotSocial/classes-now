import { RawClassInformation, Campus, Day, RegistrationStatus } from './data-interfaces'

import { readData } from './data/read'

console.log("hello, world")

let l: RawClassInformation = {
  registrationStatus: RegistrationStatus.AVAILABLE,
  name: "ACC",
  teacher: "Julia K Ravenscraft (P)",
  courseNumber: 201,
  section: 1,
  credits: 3,
  campus: Campus.Springfield,
  title: "Introduction to Financial Accounting",
  days: [Day.MONDAY, Day.WEDNESDAY, Day.FRIDAY],
  time: "10:10 am-11:00 am",
  // startTime: {
  //   h: 10,
  //   m: 10
  // },
  // endTime: {
  //   h: 11,
  //   m: 0
  // },
  capacity: 58,
  registered: 58,
  startDate: "08/22",
  endDate: "12/15",
  location: "GLAS 0433"
}

console.log(l)

const dataHTML = readData()

console.log(dataHTML)
