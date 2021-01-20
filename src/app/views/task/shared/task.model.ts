export class Task {
  constructor(
    public id?: number,
    public title?: string,
    public description?: string,
    public responsible?: string,
    public priority?: string,
    public date?: string,
    public status?: boolean
  ){}

}
