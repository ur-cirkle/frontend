export interface cardUser {
  picture: {
    large: string;
  };
  name: {
    first: string;
    last: string;
  };
}
export interface CardProps {
  cardRef?: React.RefCallback<HTMLDivElement>;
  cardUser: cardUser;
  index: number;
}
