export type Folder = {
  id: number;
  name: string;
  link: Link[];
  owner?: Owner;
};

export type Folders = {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: Link[];
};

export type Owner = {
  id: number;
  name: string;
  profileImageSource: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
};

export type Link = {
  createdAt: string;
  description: string;
  id: number;
  imageSource: string;
  title: string;
  url: string;
};

export type GetFolderResponse = {
  folder: Folder;
};
