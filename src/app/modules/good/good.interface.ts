export interface IGood {
  title: string;
  image: string;
  content: string;

  status: "active" | "inactive" | "archived" | "pending";
  isDeleted?: boolean;
}
