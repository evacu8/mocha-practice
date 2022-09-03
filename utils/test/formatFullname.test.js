const formatFullname = require("../formatFullname.js");
const expect = require("chai").expect;

describe("FormatFullname", () => {
  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal("Error");
    expect(formatFullname(34)).to.equal("Error");
    expect(formatFullname([])).to.equal("Error");
    expect(formatFullname({})).to.equal("Error");
    expect(formatFullname(function () {})).to.equal("Error");
  });
  it('should return an error if "fullName" arg length is 0', () => {
    expect(formatFullname("")).to.equal("Error");
  });
  it('should return an error if "fullName" arg is different than two words string', () => {
    expect(formatFullname("John")).to.equal("Error");
    expect(formatFullname("John Doe Smith")).to.equal("Error");
    expect(formatFullname("John Doe Smith II")).to.equal("Error");
  });
  it('should return the full name in format "Firstname Lastname" if "fullName" arg has different casing format', () => {
    expect(formatFullname("john doe")).to.equal("John Doe");
    expect(formatFullname("john Doe")).to.equal("John Doe");
    expect(formatFullname("jOHN dOE")).to.equal("John Doe");
    expect(formatFullname("JOHN DOE")).to.equal("John Doe");
  });
});
