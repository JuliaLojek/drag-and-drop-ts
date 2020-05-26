import { Project, ProjectStatus } from "../models/project";

// Listener Type
type Listener<T> = (items: T[]) => void;

// State Model
class StateModel<T> {
  protected listeners: Listener<T>[] = [];

  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
  }
}

// Project State Management
export class State extends StateModel<Project> {
  private projects: Project[] = [];
  private static instance: State;

  private constructor() {
    super();
  }

  static getInstance() {
    // makes sure there is only one instance of this class and we always work with this one
    if (this.instance) {
      return this.instance;
    }
    this.instance = new State();
    return this.instance;
  }

  addProject(title: string, desc: string, numOfPeople: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      desc,
      numOfPeople,
      ProjectStatus.Active
    );
    this.projects.push(newProject);

    this.updateListeners();
  }

  moveProject(id: string, newStatus: ProjectStatus) {
    const project = this.projects.find((project) => project.id === id);
    if (project && project.status !== newStatus) {
      // if the status is the same, don't re-render the DOM
      project.status = newStatus;
      this.updateListeners();
    }
  }

  private updateListeners() {
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice()); // we use slice to make a copy, to not mutate the original array
    }
  }
}

export const state = State.getInstance(); // creating an instance right here makes it available in the rest of the app (i.e. in the classes below to manage the state and present its values)
