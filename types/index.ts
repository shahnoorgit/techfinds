declare type ClerkUserCreateProps = {
  name: string;
  email: string;
  clerkId: string;
  photo: string;
};

declare type ClerkUserUpdateProps = {
  name: string;
  email: string;
  photo: string;
};

declare type AddProductsProps = {
  name: string;
  description: string;
  price: number;
  category: string;
  condition: string;
  usedSpan?: number;
  image: string;
  creatorId: string;
};
