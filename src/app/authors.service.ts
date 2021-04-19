export class AuthorsService {
  getAuthors() {
    return ['Jack London', 'Cormac McCarthy', 'Jane Austen'];
  }

  getCount() {
    return this.getAuthors().length;
  }
}
