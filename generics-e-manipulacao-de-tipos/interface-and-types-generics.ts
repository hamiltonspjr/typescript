export interface User {
  firstName: string;
  lastName: string;
  email: string;
}

export interface Publication {
  imageURL: string;
  description: string;
  author: User;
}

export interface Page<DataType> {
  total: number;
  perPage: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  data: DataType[];
}

export const lucas: User = {
  firstName: "Lucas",
  lastName: "Garcez",
  email: "lucas@coffstack.com",
};

export const mateus: User = {
  firstName: "Mateus",
  lastName: "Silva",
  email: "mateus_silva@gmail.com",
};

export const users: User[] = [lucas, mateus];

export const publications: Publication[] = [
  {
    imageURL: "fake-url-1",
    description: "description 1",
    author: lucas,
  },
  {
    imageURL: "fake-url-2",
    description: "description 2",
    author: mateus,
  },
  {
    imageURL: "fake-url-3",
    description: "description 3",
    author: lucas,
  },
];

export const publication1: Publication = {
  imageURL: "fake-url-1",
  description: "description 1",
  author: lucas,
};

// User
function getUserList(page: number): Page<User> {
  return {
    total: 10,
    perPage: 5,
    currentPage: page,
    hasNextPage: true,
    hasPreviousPage: false,
    data: users,
  };
}

const userList = getUserList(1);
console.log(userList.data);

// Publication
function getPublicationList(page: number): Page<Publication> {
  return {
    total: 10,
    perPage: 5,
    currentPage: page,
    hasNextPage: true,
    hasPreviousPage: false,
    data: publications,
  };
}

const publicationList = getPublicationList(1);
console.log(publicationList.data);
