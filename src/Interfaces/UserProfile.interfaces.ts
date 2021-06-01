export interface profileObj {
  username: string;
  connections: number;
  subscriptions: number;
  userid: string;
  image: string;
  bio: string;
  acc_type: string;
  public: Boolean;
  genders: string;
  blogPosts?: Array<Object>;
}
