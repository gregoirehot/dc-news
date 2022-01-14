import { addIdToElement } from "./utils";

describe("addIdToElement function", () => {
  it("should be array with id", () => {
    const result = addIdToElement([{ name: "test" }, { name: "test2" }]);
    expect(result).toEqual([
      { name: "test", id: 1 },
      { name: "test2", id: 2 },
    ]);
  });

  it("should be return null", () => {
    const result = addIdToElement(null);
    expect(result).toEqual(null);
  });
});
