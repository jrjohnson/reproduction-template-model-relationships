import Model, { belongsTo } from '@ember-data/model';

export default class CommentModel extends Model {
  @belongsTo('post') post;
}
