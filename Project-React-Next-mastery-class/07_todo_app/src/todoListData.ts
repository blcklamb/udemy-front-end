export const todoListData: Todo[] = [
  {
    title: "요리하기",
    date: "2024. 01. 26.",
    isDone: false,
    id: "0",
  },
  {
    title: "밥 먹기",
    date: "2024. 01. 26.",
    isDone: false,
    id: "1",
  },
  {
    title: "빨래 널기",
    date: "2024. 01. 26.",
    isDone: false,
    id: "2",
  },
];

export interface Todo {
  title: string;
  date: string;
  isDone: boolean;
  id: string;
}
