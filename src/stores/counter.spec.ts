import { setActivePinia, createPinia } from "pinia";
import { useCounterStore, type ITodo } from "./counter";
import { beforeEach, describe, expect, it, vi } from "vitest";

describe("todo store", () => {
  const response = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: true,
    },
  ];
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should return empty todo", async () => {
    const store = useCounterStore();
    expect(store.Todo).toEqual([]);
  });

  it("should  return val", async () => {
    const store = useCounterStore();
    const fetchdata = vi.spyOn(store, "fetchTodo");
    const data = await store.fetchTodo();
    expect(fetchdata).toHaveBeenCalledTimes(1);
    expect(data).contains([]);
  });

  it("should  return response value", async () => {
    const store = useCounterStore();

    const responseMock = vi.fn().mockReturnValue(response);
    vi.spyOn(store, "fetchTodo").mockImplementation(responseMock);
    const data = await store.fetchTodo();
    expect(data).toStrictEqual(response);
  });

  it("should return value with completed true", async () => {
    const store = useCounterStore();
    const responseMock = vi.fn().mockReturnValue(response);
    vi.spyOn(store, "fetchTodo").mockImplementation(responseMock);
    const data = store.getTodoCompleted();

    expect(data).toStrictEqual(
      response.filter((item) => item.completed === true),
    );
  });
});
