const axios = require("axios");

describe("Test get product API", () => {
  jest.setTimeout(10000);
  it("Get all tasks", async () => {
    const result = await axios.get("http://159.223.32.22:3000/tasks");
    expect(result.status).toEqual(200);
  });
  jest.setTimeout(10000);
  it("Post a task", async () => {
    const result = await axios.post("http://159.223.32.22:3000/tasks");
    expect(result.status).toEqual(200);
  });
  jest.setTimeout(10000);
  it("Read a task", async () => {
    const result = await axios.get("http://159.223.32.22:3000/tasks/0");
    expect(result.status).toEqual(200);
  });
  jest.setTimeout(10000);
  it("Update a task", async () => {
    const result = await axios.put("http://159.223.32.22:3000/tasks/0");
    expect(result.status).toEqual(200);
  });
  // jest.setTimeout(10000)
  // it("Delete a task", async () => {
  //   const result = await axios.delete("http://159.223.32.22:3000/tasks/0");
  //   expect(result.status).toEqual(200);

  // });
});
