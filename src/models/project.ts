export enum ProjectStatus {
  Active,
  Finished,
}

export class Project {
  // as a class so we can instantiate it
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus
  ) {}
}
