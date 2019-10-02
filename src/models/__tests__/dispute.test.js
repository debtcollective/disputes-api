import Dispute from "../dispute";
import knex from "../../../knex";

describe("Dispute", () => {
  beforeAll(() => {
    Dispute.knex(knex);
  });

  afterAll(() => {
    knex.destroy();
  });

  describe("model", () => {
    it("creates a new record", async () => {
      const dispute = await Dispute.query().insert({
        toolId: "1",
        toolVersion: "v1",
      });

      expect(dispute.toolId).toEqual("1");
      expect(dispute.draft).toEqual(true);
      expect(dispute.createdAt).toBeDefined();
      expect(dispute.updatedAt).toBeDefined();
    });
  });

  describe("validations", () => {
    it("validates data when draft is false", async () => {
      const dispute = await Dispute.fromJson({
        toolId: "credit-report-dispute",
        toolVersion: "1",
        userId: 1,
      });

      expect(dispute.draft).toEqual(true);
    });
  });
});
