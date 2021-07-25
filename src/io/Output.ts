export default class Output {

  public message(): string {
    return "Hello, World!"
  }

  public logKeypress(key: string) {
    console.log(key)
  }

}