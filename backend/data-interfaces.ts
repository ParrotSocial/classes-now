
export enum RegistrationStatus {
  CLOSED, NOT_AVAILABLE, AVAILABLE
}

export enum Campus {
  Springfield, Online
}

export enum Day {
  MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

export interface MilTime {
  h: number,
  m: number
}

export interface RawClassInformation {
  registrationStatus: RegistrationStatus,
  name: string,
  courseNumber: number,
  section: number,
  credits: number,
  campus: Campus,
  teacher: string,
  title: string,
  days: Day[],
  time: string,
  // startTime: MilTime,
  // endTime: MilTime,
  capacity: number,
  registered: number,
  location: string
  startDate: string, // "08/22"
  endDate: string, // "12/15"
}
